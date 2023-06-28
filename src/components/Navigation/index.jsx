import { Link } from "react-router-dom";
import "./style.css";
function Navigation() {
  return (
    <nav className="Navigation">
      <Link className="Link" to="/">
        Home page
      </Link>
      <Link className="Link" to="/users">
        Users
      </Link>
      <Link className="Link" to="/posts">
        Posts
      </Link>
      <Link className="Link" to="/photos">
        Photos
      </Link>
    </nav>
  );
}

export default Navigation;
