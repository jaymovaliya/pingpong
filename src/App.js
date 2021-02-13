import React from "react";
import "./App.scss";
import { BrowserRouter,Route } from 'react-router-dom';
import { Home, Game } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

