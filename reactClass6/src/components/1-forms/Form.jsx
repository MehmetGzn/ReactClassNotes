import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`username:${username} 
    email: ${email}
    password: ${password}`);
  };
  return (
    <div style={{ margin: "8rem" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="email">
            Username: <span className="text-danger">{username}</span>
          </label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control mt-2"
            id="username"
            value={username}
            placeholder="Username"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control mt-2"
            id="email"
            value={email}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control mt-2"
            id="password"
            value={password}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
