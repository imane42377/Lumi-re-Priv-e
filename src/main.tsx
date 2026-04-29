import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguageProvider } from './context/language_context.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/theme-context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
      <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
         </LanguageProvider>
      </BrowserRouter>
    
   
   
  </React.StrictMode>,
)
