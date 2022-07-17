import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState();

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      {users.map((item) => {
        const { id, name, username, email } = item;
        <div className="row">
          <div className="col">
            <img src="" alt="" />
            <h6></h6>
          </div>
        </div>;
      })}
      <h1>USER LIST</h1>
      {/* <button className="btn btn-success" onClick={getUsers}>
        Get Users
      </button> */}
    </div>
  );
};

export default Users;
