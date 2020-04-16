import React from 'react';


const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  signIn: () => {},
  signOut: () => {},
  ip: 'https://jsonplaceholder.typicode.com',
  token:undefined
});

export default PreferencesContext;

