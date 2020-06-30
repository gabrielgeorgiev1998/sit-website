import React from "react";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

import gradient from "../../static/gradient-banner.jpg";

const Layout = ({ className, headerClass, bodyClass, children, ...props }) => {
  bodyClass = bodyClass || "container mx-auto px-2";
  return (
    <div className={className} {...props}>
      <SEO />
      <Helmet>
        <body className="font-sans antialiased" />
      </Helmet>

      <Header className={headerClass} />
      <div className="flex flex-col bg-fixed bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${gradient})` }} >
        <div className="mt-12 lg:mt-24 bg-white w-full pb-16 mb-24 lg:mb-48 skew-y-5" >
          <div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
            <div className={bodyClass}>{children}</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default Layout;
