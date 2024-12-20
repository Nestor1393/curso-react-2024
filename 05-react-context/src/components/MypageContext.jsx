import React, { useState } from 'react';
import HeaderContext from './HeaderContext';
import FooterContext from './FooterContext';
import MainContext from './MainContext';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';


const PrincipalInitialTheme = 'my-page';




const MypageContext = () => {

const [principalTheme, setPrincipalTheme] = useState(PrincipalInitialTheme);

  return (
    <div className={principalTheme}>
      <ThemeProvider>
      <LanguageProvider>
      <AuthProvider>
          <HeaderContext />
          <MainContext/>
          <FooterContext />
      </AuthProvider>
      </LanguageProvider>
      </ThemeProvider>
        
        <div className='buttonEx'>
            <p>Este es un botón</p>
        </div>
    </div>
  )
}

export default MypageContext
