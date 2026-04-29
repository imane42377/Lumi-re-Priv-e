import { useState, useRef, useEffect } from 'react'
import { Language, useLanguage } from '../context/language_context';


const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((l) => l.code === language)!

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <style>{`
        .ls-wrapper {
          position: relative;
          display: inline-block;
          font-family: 'Geist Variable', sans-serif;
        }

    .ls-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;         
  background: var(--primary-foreground);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 13px;            
  letter-spacing: 0.04em;
  transition: border-color 0.2s, background 0.2s;
  outline: none;
  min-width: unset;          
  justify-content: space-between;
  white-space: nowrap;
}

        .ls-trigger:hover {
          border-color: var(--ring);
          background: var(--muted);
        }

        .ls-trigger.open {
          border-color: var(--accent);
          border-bottom-color: transparent;
          border-radius: calc(var(--radius)) calc(var(--radius)) 0 0;
        }

        .ls-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

       
.ls-flag {
  font-size: 14px;            
  line-height: 1;
}

       .ls-chevron {
  width: 12px;               
  height: 12px;               
  color: var(--accent);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

        .ls-chevron.open {
          transform: rotate(180deg);
        }

        .ls-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--secondary);
          border: 1px solid var(--accent);
          border-top: none;
          border-radius: 0 0 var(--radius) var(--radius);
          overflow: hidden;
          z-index: 100;
          animation: ls-reveal 0.15s ease forwards;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        @keyframes ls-reveal {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ls-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;          
  font-size: 13px;            
  color: var(--foreground);
  opacity: 0.6;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: background 0.15s, opacity 0.15s;
}

        .ls-option:hover {
          background: var(--muted);
          opacity: 1;
        }

        .ls-option.active {
          color: var(--accent);
          opacity: 1;
        }

        .ls-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          margin-left: auto;
          flex-shrink: 0;
        }
      `}</style>

      <div className="ls-wrapper" ref={ref}>
        <button
          className={`ls-trigger ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="ls-left">
            <span className="ls-flag">{current.flag}</span>
            <span>{current.label}</span>
          </span>
          <svg
            className={`ls-chevron ${open ? 'open' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="ls-dropdown" role="listbox">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`ls-option ${lang.code === language ? 'active' : ''}`}
                role="option"
                aria-selected={lang.code === language}
                onClick={() => {
                  setLanguage(lang.code)
                  setOpen(false)
                }}
              >
                <span className="ls-flag">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === language && <span className="ls-dot" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default LanguageSwitcher