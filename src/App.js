import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import Data from "./components/Data";

const App = () => {
  return (
    <>
      {/* <Test/> */}
      <Header />
      <div className="page_data">
        <Sidebar />
      <Data />
      
      </div>
    </>
  );
};

export default App;
