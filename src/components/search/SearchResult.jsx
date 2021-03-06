import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const SearchResult = ({ registrarPokemon, pokemons }) => {
  const searchReducers = useSelector((state) => {
    return state.searchReducers;
  });

  const { loading, pokemon, error } = searchReducers;
  const { name, sprites } = pokemon;

  const handleRegister = () => {
    const filterPokemons = pokemons.filter((element) => element.name.includes(`${pokemon.name}`));
    if (filterPokemons.length == 0) {
      registrarPokemon(pokemon);
      Swal.fire({
        title: "Pokemon Registrado!",
        text: "Tu pokemon ha sido registrado",
        icon: "success",
        timer: 2000,
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "El Pokemon ya esta Registrado!",
        text: "Tu pokemon ya ha sido registrado",
        icon: "error",
        timer: 2000,
        confirmButtonText: "Ok",
      });
    }
  };
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
        <section className="d-flex align-items-center my-5 animate__animated animate__zoomIn">
          <div className="card text-dark text-center mx-auto my-3" style={{ width: "15rem" }}>
            <img src={sprites.front_default} className="card-img-top" alt={name} />
            <div className="card-body pt-0 d-flex flex-column gap-1 ">
              <Link to="/pokemon">
                <li className="btn btn-primary w-100" target="_blank" rel="noreferrer">
                  Ver Mas Detalles
                </li>
              </Link>
              <li
                className="btn btn-warning"
                target="_blank"
                rel="noreferrer"
                onClick={handleRegister}
              >
                Registrar
              </li>
            </div>
          </div>
        </section>
      )}
      {error && (
        <div className="alert alert-danger my-3" role="alert">
          Pok??mon no encontrado
        </div>
      )}
    </>
  );
};

export default SearchResult;
