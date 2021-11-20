import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Aboutus from "./components/AboutUs/Aboutus";
import { RootState } from "./state/store";
import { useSelector } from "react-redux";
import PopUp from "./components/PopUp/PopUp";

function App() {
  const { show } = useSelector((state: RootState) => state.popUp);
  return (
    <div className="app">
      {show && <PopUp />}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Aboutus} />
      </Switch>
    </div>
  );
}

export default App;
