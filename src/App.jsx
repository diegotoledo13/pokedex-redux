import { useEffect } from "react";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, getPokemonDetails } from "./api";
import { setPokemons } from "./actions/index";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
