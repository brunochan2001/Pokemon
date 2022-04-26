import { Provider } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./Pages/Pokemon";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/pokemon" element={<PokemonPage></PokemonPage>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
