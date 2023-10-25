import React from "react";

export default function Display({ pokemon }) {
  return (
    <div>
      {pokemon.sprites ? (
        <>
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="Pokemon"
          />
          <p> Weight: {pokemon.weight}</p>
          <p> Height: {pokemon.height}</p>
        </>
      ) : (
        <p>Nera</p>
      )}
    </div>
  );
}
