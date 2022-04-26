import SearchResult from "../components/search/SearchResult";
import SearchPokemon from "../components/search/SearchPokemon";

const Home = () => {
  return (
    <main className="main ">
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-4">Buscador de Pokemones</h1>
          <section className="col-md-12">
            <div className="row ">
              <SearchPokemon></SearchPokemon>
            </div>
          </section>
          <section className="col-md-12">
            <div className="row ">
              <SearchResult></SearchResult>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
