import React from "react";
import Header from "./components/header";
import Home from "./views/Home";
import Project from "./views/Project";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
