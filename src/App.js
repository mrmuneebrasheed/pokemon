import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import LoginContext from "./components/LoginContext";
import Home from "./components/Home";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navbar = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(grey 20%, blue);
    color: white;
  }
  & h1 {
    padding: 10px;
  }
`;
const Nav = styled.ul`
  & {
    list-style: none;
    display: flex;
    justify-content: evenly;
  }

  & li {
    color: white;
    font-size: 2rem;
    text-decoration: none;
    margin: 10px;
    transition: all 100ms linear;
  }
  & li:hover {
    transform: scale(1.2);
    color: black;
  }
`;
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const setAuth = () => {
    setIsLogin(!isLogin);
  };
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setAuth }}>
      <BrowserRouter>
        <div className="App">
          <Navbar>
            <h1>Poke-Context</h1>

            <Nav>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/login">
                <li>Login</li>
              </Link>
            </Nav>
          </Navbar>
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
