import { useState, useEffect } from "react";
import LanguageSwitcher from "../Switcher/languageSwitcher";
import { ThemeSwitcher } from "../Switcher/theme-switcher";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
     
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      key:"Services" ,
      title: t("nav.links.services"),
    },
    {
      key:"Experiences" ,
      title:  t("nav.links.experiences") ,
    },
    {
      key:"Testimonials" ,
      title: t("nav.links.testimonials"),
    },
    {
      key: "About Us",
      title: t("nav.links.about"),
    },
    {
      key:"Contact" ,
      title: t("nav.links.contact"),
    },
    ]
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background backdrop-blur-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        <div className="flex flex-col leading-none">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-2xl tracking-[0.12em] font-semibold"
          >
            Lumière
          </span>
          <span
            className="text-[9px] font-bold tracking-[0.45em] uppercase text-accent mt-[-2px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Privée
          </span>
        </div>

        {/* Desktop Links */}
        <ul
          className="hidden md:flex items-center gap-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={`#${link.key.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent hover:text-accent transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <a
            href="#contact"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-[9px] font-medium tracking-[0.35em] uppercase bg-accent text-[#f5f2eb] px-6 py-3 hover:bg-accent transition-colors duration-300"
          >
             {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] cursor-pointer"
          >
            <span
              className={`block w-5 h-[1px] bg-accent transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-accent transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-accent transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col items-center gap-6 py-8 bg-background border-t border-accent"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={`#${link.key
                  .toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-[10px] tracking-[0.35em] uppercase text-[#7a7060] hover:text-accent transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={()=>{
                document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
              setMenuOpen(false)
            }
              }
              className="text-[9px] font-medium tracking-[0.35em] uppercase bg-accent text-[#f5f2eb] px-8 py-3 hover:bg-accent transition-colors duration-300"
            >
              {t("nav.cta")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;