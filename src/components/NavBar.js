import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBAr() {
  const Navbar = styled.div`
    & {
      display: flex;
      justify-content: space-between;
      background: linear-gradient(#000040ff, blue);
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
  return (
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
  );
}
