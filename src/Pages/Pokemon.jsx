import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResult from "../components/search/SearchResult";

const PokemonPage = () => {
  const searchReducers = useSelector((state) => {
    return state.searchReducers;
  });

  const { pokemon } = searchReducers;
  const { name, sprites, types, base_experience, abilities } = pokemon;

  return (
    <section className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="card text-dark text-center mx-auto" style={{ width: "17rem" }}>
        <img src={sprites.front_default} className="card-img-top" alt={name} />
        <div className="card-body pt-0">
          <h1 className="card-title">{name}</h1>
          <p className="card-text">base Experience: {base_experience}</p>
          <p className="card-text">Type: {types[0].type.name}</p>
          <h4 className="card-hability">Habilities</h4>
          <ul className="px-0">
            {abilities.map(({ ability }, index) => {
              return (
                <li key={index} style={{ listStyleType: "none" }}>
                  {ability.name}
                </li>
              );
            })}
          </ul>
          <Link to="/">
            <li className="btn btn-success" target="_blank" rel="noreferrer">
              Volver A Pagina Principal
            </li>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
