import { Input } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { filterPokemonSearch } from "../slices/dataSlice";
import "../styles/Searcher.css";

const Searcher = () => {
  const state = useSelector((state) => state.data, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const searchResult = state.pokemons.filter((pokemon) => {
        const name = pokemon.name.toLocaleLowerCase();
        const value = e.target.value.toLocaleLowerCase();

        return name.includes(value);
      });
      dispatch(filterPokemonSearch(searchResult));
    } else {
      dispatch(filterPokemonSearch([]));
    }
  };

  return (
    <>
      <Input
        className="searcher"
        placeholder="buscar pokemon..."
        onChange={handleChange}
        disabled={loading}
      />
    </>
  );
};
export default Searcher;
