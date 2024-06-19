import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/location"}>Location</Link>
      <Link to={"users"}>Users</Link>
    </div>
  );
}

export default Header;
