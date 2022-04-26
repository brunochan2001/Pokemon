import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/SearchActions";

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState({
    formBuscadorPokemon: "",
  });

  const handleChange = (e) => {
    setPokemon({ ...pokemon, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(pokemon.formBuscadorPokemon));
  };

  return (
    <form onSubmit={handleSubmit} className="text-dark">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="formBuscadorPokemon"
          name="form-buscador-pokemon"
          required
          placeholder="Nombre del Pokémon"
          value={pokemon.formBuscadorPokemon}
          onChange={handleChange}
        />
        <label htmlFor="">Nombre del Pokémon</label>
      </div>
      <button className="btn btn-warning rimary w-100">Buscar Pokémon</button>
    </form>
  );
};
export default SearchPokemon;
