import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import gengarEjemplo from "../assets/094.png";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={<img src={gengarEjemplo} alt="Gengar"></img>}
      extra={<StarOutlined />}
    >
      <Meta description="Fantasma, Veneno" />
    </Card>
  );
};
export default PokemonCard;
