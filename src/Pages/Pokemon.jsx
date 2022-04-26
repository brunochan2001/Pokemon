import { useSelector } from "react-redux";

const PokemonPage = () => {
  const searchReducers = useSelector((state) => {
    return state.searchReducers;
  });

  const { loading, pokemon, error } = searchReducers;
  const { name, sprites, types } = pokemon;
  return <></>;
};

export default PokemonPage;
