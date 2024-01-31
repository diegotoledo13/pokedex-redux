import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const state = useSelector((state) => state.data, shallowEqual);
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Header />
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={6}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList
          pokemons={state.isSearch ? state.searchPokemons : state.pokemons}
        />
      )}
    </div>
  );
}

export default App;
