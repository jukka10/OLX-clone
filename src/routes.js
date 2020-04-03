import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Template } from "./components/mainComponents";

import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Routes() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Router />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}
