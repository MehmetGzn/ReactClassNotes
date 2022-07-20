import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4">
        <li>
          <Link to="/">Home</Link>
          {/* <a href="/">Home</a> */}
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
          {/* <a href="/Instructors">Instructors</a> */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          {/* <a href="/contact">Contact</a> */}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
