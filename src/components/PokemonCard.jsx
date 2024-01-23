import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image, types }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name}></img>}
      extra={<StarOutlined />}
    >
      <Meta description="Fantasma, Veneno" />
    </Card>
  );
};
export default PokemonCard;
