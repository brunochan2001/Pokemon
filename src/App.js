import { Provider } from "react-redux";
import "./App.css";
import SearchPokemon from "./components/search/SearchPokemon";
import SearchResult from "./components/search/SearchResult";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <main className="main ">
        <section className="py-3">
          <div className="container">
            <h1 className="text-center">Buscador de Pokemones</h1>
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
    </Provider>
  );
}

export default App;
