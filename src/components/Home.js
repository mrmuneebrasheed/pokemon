import React, { useContext, useState, useEffect } from "react";
import LoginContext from "./LoginContext";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;

  color: white;
`;
export default function Home() {
  const MyContext = useContext(LoginContext);
  const [ID, setID] = useState(1);
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const generateID = () => setID(Math.floor(Math.random() * 151) + 1);
  const getPokemon = () => {
    setIsLoading(true);
    fetch(` https://pokeapi.co/api/v2/pokemon/${ID}`)
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(pokemon);
        setIsLoading(false);
      });
  };
  useEffect(() => getPokemon(), [ID]);

  const capitalizeName = (name) =>
    name && name[0].toUpperCase() + name.slice(1) + "";

  const name = capitalizeName(pokemon?.name);
  const height = pokemon?.height;
  const weight = pokemon?.weight;
  const types = pokemon?.types;
  return (
    <Background>
      {
        <h1 className="text-center bg-success text-light p-3 col-5 my-2 mx-auto">
          Home
        </h1>
      }
      <button
        onClick={generateID}
        className="btn btn-success col-2 mx-auto my-2 px-5 py-3"
      >
        Get Pokemon
      </button>
      <div
        style={{
          border: "5px solid black",
          borderRadius: "12px",
          opacity: "0.9",
          background:
            "linear-gradient(rgba(245, 246, 252, 0.52), rgba(0, 100, 0, 0.5))",
        }}
        className="col-3 mx-auto bg-light text-dark p-5"
      >
        {isLoading && MyContext.isLogin && <p>Loading..</p>}
        {!isLoading && MyContext.isLogin && (
          <div>
            <div className="mx-2 bg-success border border-dark rounded my-2 d-flex justify-content-center">
              <img
                alt={name}
                style={{ width: "60%", height: "auto" }}
                src={pokemon?.sprites.other["official-artwork"].front_default}
              ></img>
            </div>
            <h2 className="mx-2 bg-light border border-dark rounded text-center p-3 text-primary">
              {isNaN(name) && `Name: ${name}`}
            </h2>
            <h3 className="mx-2 bg-light border border-dark rounded text-center p-3 text-dark">
              {height && `Height: ${height}`}
            </h3>
            <h3 className="mx-2 bg-light border border-dark rounded text-center p-3 text-dark">
              {weight && `Weight: ${weight}`}
            </h3>
            <h4 className="mx-2 bg-light border border-dark rounded text-center p-3 text-dark">
              <span>Types: </span>
              {types?.map((type) => (
                <span key={Math.random()}>
                  {capitalizeName(type.type.name)}
                </span>
              ))}
            </h4>
          </div>
        )}
        {!MyContext.isLogin && <div className="h3">Please Log in First</div>}
      </div>
    </Background>
  );
}
