import React from 'react'

const Header = ({theme, handleTheme, handleLanguage, texts, auth, handleAuth}) => {



  return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>
            <select name='language' onChange={handleLanguage}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <input type='radio' name='theme' value="light" onClick={handleTheme} id='light'/>
            <label htmlFor='light'>{texts.headerLight} </label>
            <input type='radio' name='theme' value="dark" onClick={handleTheme} id='dark'/>
            <label htmlFor='dark'>{texts.headerDark}</label>
            <button onClick={handleAuth}>{auth? texts.buttonLogin : texts.buttonLogout}</button>
        </header>
  )
}

export default Header
