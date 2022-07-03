import { useEffect, useState } from "react";
import { Cast } from './Cast';


export function Film(props) {

    const {
        title,
        director,
        producer,
        release_date,
        characters
    } = props.film;


    //const [character, setCharacter] = useState([]);

    // const fetchCharacter = async (url) => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);

    //     setCharacter(data);

    // }



    // useEffect(() => {
    //     fetchData();
    // }, [props.name]);

    return (
        <div className="film-info">
            {props.film
                ? <><h2>{title}</h2>
                    <h4>Director: {director}</h4>
                    <h4>Producer: {producer}</h4>
                    <p>Released: {release_date}</p>

                    <ul>
                        {characters.map((cast, i) =>
                            <Cast key={i} url={cast} />
                        )}

                    </ul>

                </>
                : <div></div>
            }
        </div>

    )
}
