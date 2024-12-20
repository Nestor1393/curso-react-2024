import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const initialTheme = 'light';
const PrincipalInitialTheme = 'my-page';
const initialLanguage = 'es';
const initialAuth = null;


const translations = {
  es: {
    headerTitle: "mi aplicacion sin context api",
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
    headerTitle: "my application without context api",
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

const Mypage = () => {
const [theme, setTheme] = useState(initialTheme);
const [principalTheme, setPrincipalTheme] = useState(PrincipalInitialTheme);
const [language, setLanguage] = useState(initialLanguage);
const [texts, setTexts] = useState(translations[language]);
const [auth, setAuth] = useState(initialAuth);

const handleTheme = (e) => {
  
  if(e.target.value === 'light'){
    setTheme('light');
    setPrincipalTheme(PrincipalInitialTheme);

  }else{
    setTheme('dark');
    setPrincipalTheme('my-page dark2');
  }
};

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

const handleAuth = (e) => {

  if(auth){
      setAuth(null);
  }else{
    setAuth(true);
  }

}

  return (
    <div className={principalTheme}>
        <Header theme={theme} handleTheme={handleTheme}
         texts={texts} handleLanguage={handleLanguage}
         auth={auth} handleAuth={handleAuth}/>
        <Main theme={theme} texts={texts} auth={auth}/>
        <Footer theme={theme} texts={texts}/>
        <div className='buttonEx'>
            <p>Este es un botón</p>
        </div>
    </div>
  )
}

export default Mypage
