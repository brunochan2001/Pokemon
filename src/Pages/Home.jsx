import SearchResult from "../components/search/SearchResult";
import SearchPokemon from "../components/search/SearchPokemon";
import { useState, useEffect } from "react";
import RegisterPokemons from "../components/register/RegisterPokemons";

const Home = () => {
  let pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemons-descriptions"));
  if (pokemonLocalStorage) {
  } else {
    pokemonLocalStorage = [];
  }
  const [pokemons, setPokemons] = useState(pokemonLocalStorage);

  useEffect(() => {
    let pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemons-descriptions"));
    if (pokemonLocalStorage) {
      localStorage.setItem("pokemons-descriptions", JSON.stringify(pokemons));
    } else {
      localStorage.setItem("pokemons-descriptions", JSON.stringify([]));
    }
  }, [pokemons]);

  const registrarPokemon = (pokemon) => {
    const { name, sprites, types, base_experience, abilities } = pokemon;
    setPokemons([
      ...pokemons,
      {
        name: name,
        sprites: sprites.front_default,
        types: types[0].type.name,
        base_experience: base_experience,
        abilities: abilities,
      },
    ]);
  };
  return (
    <main className="main ">
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-4 ">Buscador de Pokemones</h1>
          <section className="col-md-12">
            <div className="row ">
              <SearchPokemon></SearchPokemon>
            </div>
          </section>
          <section className="col-md-12">
            <div className="row ">
              <SearchResult registrarPokemon={registrarPokemon}></SearchResult>
            </div>
          </section>
          <section className="col-md-12">
            <div className="row ">
              <RegisterPokemons pokemons={pokemons}></RegisterPokemons>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
