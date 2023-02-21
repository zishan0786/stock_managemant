import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavMenu from "./NavMenu";
import Product from "./Product";
import Vendor from "./Vendor";
import Home from "./Home";

export default function Viewer() {
  const login = localStorage.getItem("login");

  return (
    <>
      {login === "true" ? (
        <Router>
          <Routes>
            <Route path="/" element={<NavMenu />}>
              <Route path="/home" element={<Home />} />

              <Route exact path="/products" element={<Product />} />
              <Route exact path="/vendors" element={<Vendor />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}
