import { createContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'vi');

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>{children}</LanguageContext.Provider>;
}

export { LanguageContext };
