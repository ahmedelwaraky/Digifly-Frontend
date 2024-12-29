"use client"

import { wrapper } from "../src/store";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../src/store";
import Navbar from "../src/components/navbar/page";
import Footer from "../src/components/footer/Footer";
import { appWithTranslation } from "next-i18next";
 

function RootLayout({ children }) {

  return (

    <Provider store={store}>
      <html >
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`  antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}

export default appWithTranslation(RootLayout);
