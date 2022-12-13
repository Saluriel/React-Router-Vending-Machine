import React from "react"

import Navbar from "./Navbar"
import VendingMachine from "./VendingMachine"
import Chips from "./Chips"
import Soda from "./Soda"
import Surprise from "./Surprise"

import { BrowserRouter, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/surprise">
          <Surprise />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
