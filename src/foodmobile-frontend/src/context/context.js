import React from 'react';


const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  signIn: () => {},
  signOut: () => {},
  ip: 'http://34.70.161.213/dev',//'https://jsonplaceholder.typicode.com',
  endpoints : {
    login:'/login',
    createAccount: `/register/normal`,
    test:'/api/test',
    userInfo:'/auth/userinfo',
    createCompany: '/bus/createcompany',
    createFinancial:'/bus/createcompanyfinancial',
    createGenre:'/bus/createfoodgenre',
    createDietary: '/bus/createcompanydietary'
  },
  token:undefined
});

export default PreferencesContext;

