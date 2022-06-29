import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Pokemon } from './Pokemon';

function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


  const fetchData = async () => {


    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    setData(data.results);


  }

  // const handleClick = () => {
  //   setOffset(offset + 5);
  //   fetchData(offset);
  // }

  useEffect(() => {
    fetchData();
  }, [offset, limit]);


  return (
    <div className="App">
      <button onClick={() => setOffset(offset === 0 ? offset : offset - limit)}>Previous 5</button>
      <button onClick={() => setOffset(offset + limit)}>Next 5</button>
      {data
        ? data.map((pokemon, i) => (<Pokemon name={pokemon.name} key={i} url={pokemon.url} />))

        : <div></div>}

    </div>
  );

}
export default App;
