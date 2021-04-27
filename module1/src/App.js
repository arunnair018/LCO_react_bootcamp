import React from "react";
import "./styles.css";
import Button from "./Button";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button title="App Store" />
      <Button title="Play Store" />
      <Button />

      {/* <button className="button">App Store</button>
      <button className="button">Play Store</button> */}
    </>
  );
};

export default App;