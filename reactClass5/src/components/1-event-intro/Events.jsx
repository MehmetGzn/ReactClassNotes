const Events = () => {
  let info = "Events";

  const handleClick = () => {
    alert("btn clicked");
  };

  const handleClear = (text) => {
    alert(text);
  };

  const handleChange = (e) => {
    info = "Hooks";
    console.log(e.target);
  };

  return (
    <div className="container text-center mt-4">
      <div className="display-4 text-danger m4">{info}</div>
      <button onClick={handleClick} className="btn btn-warning">
        Click
      </button>
      {/* Eger bir event fonksiyonunun paremetresi olmasi gerkiyorsa 
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi 
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button
        onClick={() => handleClear("Clear btn pressed")}
        className="btn btn-dark"
      >
        Clear
      </button>
      <button onClick={(e) => handleChange(e)} className="btn btn-danger">
        Change
      </button>
    </div>
  );
};

export default Events;
