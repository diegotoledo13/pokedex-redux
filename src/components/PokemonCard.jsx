import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types, colors, id }) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      style={{
        width: 300,
        margin: "1rem",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f1e5ff",
      }}
      title={name}
      cover={<img src={image} alt={name}></img>}
      extra={<StarButton isFavorite onClick={handleOnFavorite} />}
    >
      {types.map((type, index) => (
        <Meta
          key={index}
          description={type.type.name}
          style={{
            backgroundColor: colors[index],
            fontWeight: "bold",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            margin: "0.5rem 0",
            textTransform: "uppercase",
          }}
        />
      ))}
    </Card>
  );
};
export default PokemonCard;
