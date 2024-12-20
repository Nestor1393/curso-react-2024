import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = 'es';

const translations = {
  es: {
    headerTitle: "mi aplicacion CON context api",
    headerSubtitle: "mi cabecera",
    headerLight: "claro",
    headerDark: "oscuro",
    buttonLogin: "iniciar sesion",
    buttonLogout: "cerrar seesion",
    mainWelcome: "bienvenido invitado",
    mainHello: "hola usuario",
    mainContent: "mi contenido principal",
    footerTitle: "mi pie de pagina",
  },
  en: {
    headerTitle: "my application WITH context api",
    headerSubtitle: "my header",
    headerLight: "light",
    headerDark: "dark",
    buttonLogin: "login",
    buttonLogout: "logout",
    mainWelcome: "welcome",
    mainHello: "hellow user",
    mainContent: "my main content",
    footerTitle: "my footer",
  },

}

const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        const value = e.target.value;
      
        if(value === 'es'){
            setLanguage(value);
            setTexts(translations.es);
      
        }else{
          setLanguage(value);
          setTexts(translations.en);
        }
      };

      const data = {texts, handleLanguage};

      return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
        )

};

export {LanguageProvider};
export default LanguageContext;