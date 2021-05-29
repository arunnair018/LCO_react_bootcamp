import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AppTheme from "./colors";

const App = () => {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div
        style={{
          backgroundColor: `${AppTheme[themeHook[0]].backgroundColor}`,
          height: "auto",
        }}
      >
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
