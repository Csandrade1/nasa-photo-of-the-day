import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ReactDOM from "react-dom";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="App">{data && <NasaPhoto photo={data} />}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
