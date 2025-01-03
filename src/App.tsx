import React from 'react';
import './App.css';
import Header from "./modules/header/Header";
import {RouterProvider} from "react-router-dom";
import {routes} from "./utils/routes";

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
