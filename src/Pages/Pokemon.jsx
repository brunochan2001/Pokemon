import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResult from "../components/search/SearchResult";

const PokemonPage = () => {
  const searchReducers = useSelector((state) => {
    return state.searchReducers;
  });

  const { pokemon } = searchReducers;
  const { name, sprites, types } = pokemon;
  return (
    <section className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="card text-dark text-center mx-auto" style={{ width: "15rem" }}>
        <img src={sprites.front_default} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{types[0].type.name}</p>
          <Link to="/">
            <li className="btn btn-primary" target="_blank" rel="noreferrer">
              Volver A Pagina Principal
            </li>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
