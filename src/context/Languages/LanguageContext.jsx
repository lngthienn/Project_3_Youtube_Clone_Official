import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState('vi');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) setCurrentLanguage(savedLanguage);
    }, []);

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>{children}</LanguageContext.Provider>;
}

export { LanguageContext };
