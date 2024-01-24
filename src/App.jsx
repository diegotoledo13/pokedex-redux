import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions/index";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
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
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
