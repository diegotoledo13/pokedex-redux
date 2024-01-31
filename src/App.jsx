import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions/index";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));
  const favoritePokemon = useSelector((state) => state.favoritePokemon);
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
      {favoritePokemon && (
        <img src={favoritePokemon.pokemon.image} alt={favoritePokemon.name} />
      )}
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
