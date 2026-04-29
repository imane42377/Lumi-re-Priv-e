
import  { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from '../i18n';
export type Language ="en" | "fr";
type LanguageContextType = {
  language: Language;
  setLanguage:(lang: Language) => void ;
}
const  LanguageContext= createContext<LanguageContextType |undefined>(undefined);
const SUPPORTED_LANGUAGES: Language[]=["en" , "fr"]
function isSupportedLanguage(lang:unknown):lang is Language{
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}
function getLanguageFromPath(pathname: string): Language {
 const segments=pathname.split("/").filter(Boolean);
 const first =segments[0];
  if(isSupportedLanguage(first)){
    return first ;
  }
  return "en";
}
export function LanguageProvider({children}:{children:ReactNode}){
  const navigate=useNavigate();
  const location=useLocation();
  const [language,setLanguageState]=useState<Language>(()=>{
     const stored = localStorage.getItem('preferred-language')
    if (isSupportedLanguage(stored)) return stored
    return getLanguageFromPath(location.pathname)
  }
  );
  useEffect(()=>{
const currentLang=getLanguageFromPath(location.pathname);
const segments=location.pathname.split("/").filter(Boolean);
const first =segments[0];
if(!isSupportedLanguage(first) || first !==currentLang){
  const pathWithoutLang = isSupportedLanguage(first)
  ? segments.slice(1).join("/")
  : segments.join("/");
  const newPath=`/${currentLang}${pathWithoutLang ? `/${pathWithoutLang}` : ""}`;
  navigate(newPath , {replace:true});
}
  },[location.pathname])

  useEffect(() => {
       i18n.changeLanguage(language);
    }, [language]);
 
    useEffect(() => {
        const newLang = getLanguageFromPath(location.pathname);
        if (newLang !== language) {
            setLanguageState(newLang);
        }
    }, [location.pathname, language]);
 
    const setLanguage = (lang: Language) => {
        if (!isSupportedLanguage(lang)) {
            console.warn(`Unsupported language: ${lang}. Supported: ${SUPPORTED_LANGUAGES.join(", ")}`);
            return;
        }
 
        setLanguageState(lang);
 
        const segments = location.pathname.split("/").filter(Boolean);
        const first = segments[0];
 
        let newPath: string;
 
        if (isSupportedLanguage(first)) {
            segments[0] = lang;
            newPath = "/" + segments.join("/") || "/";
        } else {
            newPath = `/${lang}${location.pathname}`;
        }
 
        navigate(newPath + location.search + location.hash, { replace: true });
    };
 
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
 
export function useLanguage() {
    const context = useContext(LanguageContext);
    
    if (!context) {
        throw new Error(
            "useLanguage must be used inside <LanguageProvider>. " +
            "Make sure your component is wrapped with LanguageProvider in your app root."
        );
    }
    
    return context;

}

