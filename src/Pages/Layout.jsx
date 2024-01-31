// Layout.js
import React from 'react';
import Header from '../Components/Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header showNavBar={true} />
      {children}
    </>
  );
};

export default Layout;
