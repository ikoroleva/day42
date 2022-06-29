import { useEffect, useState } from "react";

export function Fact() {
    const [joke, setJoke] = useState('');
    const [setup, setSetup] = useState('');
    const [delivery, setDelivery] = useState('');
    const [showDelivery, setShowDelivery] = useState(false);
    // const [dataLoaded, setDataLoaded] = useState(false);

    const url = "https://v2.jokeapi.dev/joke/Any";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);


        if (data.joke) {
            setJoke(data.joke);
            setDelivery('');
            setShowDelivery(false);
            setSetup('');
            //setDataLoaded(true);


        }

        else if (data.setup && data.delivery) {
            setSetup(data.setup);
            setDelivery(data.delivery);
            setShowDelivery(false);
            setJoke('');
            //setDataLoaded(true);

        }


    }

    useEffect(() => {
        const id = setTimeout(() => {

            setShowDelivery(true)

        }, 3000);
        return () => clearTimeout(id);
    }, [setDelivery]);


    return (
        <div>
            {joke
                ? <h2>{joke}</h2>
                : <div><h2>{setup}</h2><h3>{delivery}</h3></div>
            }
            <button onClick={() => { fetchData() }}>New joke</button>
        </div>

    )
}

export default Fact;