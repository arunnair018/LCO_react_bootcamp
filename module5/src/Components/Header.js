import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors";

const Header = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const currenTheme = AppTheme[themeMode];

  return (
    <header>
      <nav class={`navbar navbar-light ${currenTheme.navbar}`}>
        <div class="container-fluid">
          <a class="navbar-brand" style={{ color: `${currenTheme.brand}` }}>
            Navbar
          </a>
          <form class="d-flex">
            <button
              class="btn btn-sm btn-outline-success"
              style={{
                backgroundColor: "#26ae60",
                color: "black",
                border: `${currenTheme.border}`,
              }}
              onClick={(e) => {
                e.preventDefault();
                setThemeMode(themeMode === "light" ? "dark" : "light");
              }}
            >
              {themeMode === "light" ? "Light On" : "Light Off"}
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
