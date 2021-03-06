import { languages } from "../../helpers/data";
import Item from "../items/Item";
import "./card.css";

const Card = () => {
  return (
    <div className="card-area-conrainer">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="card-container">
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
