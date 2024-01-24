import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";

const PokemonCard = ({ name, image, types }) => {
  const typesString = types.map((type) => type.type.name).join(", ");
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name}></img>}
      extra={<StarButton isFavorite onClick={() => alert("click")} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};
export default PokemonCard;
