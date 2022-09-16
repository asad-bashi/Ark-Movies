import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="Navbar">
      <Drawer
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        anchor="right"
      >
        <aside className="Drawer">
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/watchlist">
            WatchList
          </NavLink>
        </aside>
      </Drawer>
      <div className="Container">
        <img
          onClick={() => navigate("/")}
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...aHrx9KmBrFwXs1M3EMoAJtliYvgfds8PU7"
          alt=""
          height="75px"
        />
        <nav className="regular">
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/watchlist">
            WatchList
          </NavLink>
        </nav>
        <nav className="mobile">
          <MenuIcon
            onClick={() => setIsDrawerOpen(true)}
            sx={{ color: "#b71c1c", fontSize: "2.5rem" }}
          />
        </nav>
      </div>
    </header>
  );
}
