import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const SearchResult = () => {
  const searchReducers = useSelector((state) => {
    return state.searchReducers;
  });

  const { loading, pokemon, error } = searchReducers;
  const { name, sprites } = pokemon;

  return (
    <>
      {loading && (
        <div className="row">
          <section className="col-md-12 text-center py-3">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        </div>
      )}
      {Object.keys(pokemon).length > 0 && (
        <section className="d-flex align-items-center my-5">
          <div className="card text-dark text-center mx-auto my-3" style={{ width: "15rem" }}>
            <img src={sprites.front_default} className="card-img-top" alt={name} />
            <div className="card-body pt-0">
              <Link to="/pokemon">
                <li className="btn btn-primary" target="_blank" rel="noreferrer">
                  Ver Mas Detalles
                </li>
              </Link>
            </div>
          </div>
        </section>
      )}
      {error && (
        <div className="alert alert-danger my-3" role="alert">
          Pokémon no encontrado
        </div>
      )}
    </>
  );
};

export default SearchResult;
