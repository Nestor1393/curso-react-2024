import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

const HeaderContext = () => {

const {theme, handleTheme} = useContext(ThemeContext);
const {texts, handleLanguage} = useContext(LanguageContext);
const {auth, handleAuth} = useContext(AuthContext);

  return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>
            <select name='language' onChange={handleLanguage}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <input type='radio' name='theme' value="light" onClick={handleTheme} id='light-context'/>
            <label htmlFor='light-context'>{texts.headerLight} </label>
            <input type='radio' name='theme' value="dark" onClick={handleTheme} id='dark-context'/>
            <label htmlFor='dark-context'>{texts.headerDark}</label>
            <button onClick={handleAuth}>{auth? texts.buttonLogin : texts.buttonLogout}</button>
        </header>
  )
}

export default HeaderContext
