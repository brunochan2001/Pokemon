import { Link } from "react-router-dom";
const RegisterPokemons = ({ pokemons }) => {
  return (
    <>
      <h2>Tus Pokemones Registrados</h2>
      <div className="d-flex gap-5 flex-wrap">
        {pokemons.map((pokemons) => {
          const { name, base_experience, sprites, type, abilities } = pokemons;
          return (
            <>
              <section className="d-flex align-items-center my-1">
                <div className="card text-dark text-center mx-auto my-3" style={{ width: "15rem" }}>
                  <img src={sprites} className="card-img-top" alt={name} />
                  <h5>{name}</h5>
                  <p className="card-text">base Experience: {base_experience}</p>
                  <p className="card-text">Type: {type}</p>
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
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RegisterPokemons;