import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
