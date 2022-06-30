import Button from "../button/Button";
import "./card.css";

const Card = ({ img, btnName, dil }) => {
  return (
    <div className="card-div">
      <h1 className="title">{dil}</h1>
      <img className="card-img" src={img} alt="" />
      <Button btnName={btnName} />
    </div>
  );
};

export default Card;
