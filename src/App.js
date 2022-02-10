import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ListPage from "./components/ListPage/ListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data/mockData.json";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const inputCallback = (enteredValue) => {
    setInputValue(enteredValue);
  };

  const filteredData = data.data.filter((filteruser) => {
    if (inputValue.length === 0) {
      return null;
    } else {
      return filteruser[0].toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage inputCallback={inputCallback} filteredData={filteredData} inputValue={inputValue}/> } />
        <Route path="/search_page" element={<ListPage inputCallback={inputCallback} filteredData={filteredData} inputValue={inputValue}/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
