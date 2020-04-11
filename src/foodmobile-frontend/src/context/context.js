import React from 'react';


const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  signIn: () => {},
  signOut: () => {},
  token:undefined
});

export default PreferencesContext;

