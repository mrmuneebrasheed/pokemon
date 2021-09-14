import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginContext from "./components/LoginContext";
import Home from "./components/Home";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const setAuth = () => {
    setIsLogin(!isLogin);
  };
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setAuth }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
