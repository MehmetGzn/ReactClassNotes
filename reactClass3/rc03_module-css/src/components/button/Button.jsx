import btnStyle from "./button.module.css";

const Button = ({ btnName }) => {
  return (
    <div className={btnStyle["btn-div"]}>
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Button;
