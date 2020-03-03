import React from 'react';


export default PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  signIn: () => {},
  signOut: () => {}
});

