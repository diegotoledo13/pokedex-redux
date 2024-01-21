import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { getPokemon } from "./api";
import { setPokemons as setPokemonsActions } from "./actions/index";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import "./App.css";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
