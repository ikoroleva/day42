import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Film } from './Film';

function App() {
  const [data, setData] = useState([]);
  const url = "https://swapi.dev/api/films";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data
        ? data.map((film, i) => (<Film film={film} key={i} />))

        : <div></div>}
    </div>
  );
}

export default App;
