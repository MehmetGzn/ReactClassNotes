import Msg from "./Msg";

const Person = ({ name, img, tel }) => {
  //const { name, img, tel } = props;
  return (
    <div>
      <Msg name={name} />
      <img src={img} alt="" />
      <p>+48 {tel}</p>
    </div>
  );
};

export default Person;
