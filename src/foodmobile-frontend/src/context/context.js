import React from 'react';


const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  signIn: () => {},
  signOut: () => {},
  ip: 'http://34.70.161.213',//'https://jsonplaceholder.typicode.com',
  endpoints : {
    login:'/login'
  },
  token:undefined
});

export default PreferencesContext;

