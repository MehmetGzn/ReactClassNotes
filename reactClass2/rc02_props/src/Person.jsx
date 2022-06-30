import Msg from "./Msg";
const imgStyle = { width: "40%" };

const Person = ({ name, img, tel }) => {
  //const { name, img, tel } = props;
  return (
    <div>
      <Msg name={name} />
      <img style={imgStyle} src={img} alt="" />
      <p>+48 {tel}</p>
    </div>
  );
};

export default Person;
