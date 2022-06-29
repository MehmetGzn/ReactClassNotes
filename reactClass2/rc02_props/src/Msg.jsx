const Msg = (props) => {
  //* to see the props ocject;
  //!  console.log(props);

  const { name } = props;
  return (
    <div>
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
