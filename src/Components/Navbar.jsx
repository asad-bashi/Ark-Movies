import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Container">
        <span>Logo</span>
        <nav>
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/watchlist">
            WatchList
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
