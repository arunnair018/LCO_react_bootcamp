import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors";

const HeroSection = () => {
  const themeMode = useContext(ThemeContext)[0];
  const currenTheme = AppTheme[themeMode];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currenTheme.backgroundColor}`,
        color: `${currenTheme.color}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
    </div>
  );
};

export default HeroSection;
