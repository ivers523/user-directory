import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./styles.css";


export default function App() {
  return (
    <div className="container">
    <Header position={{
      top: 0,
      left: 0
    }} />
    <Content />
    <Footer />
    </div>
  );
}
