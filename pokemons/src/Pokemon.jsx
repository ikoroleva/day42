import { useEffect, useState } from "react";

export function Pokemon(props) {
    const [pokemon, setPokemon] = useState(null);


    const url = props.url;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setPokemon(data);

    }

    useEffect(() => {
        fetchData();
    }, [props.name]);

    return (
        <div>
            {pokemon
                ? <><h2>This is {pokemon.name}</h2>
                    <p>Base experience: {pokemon.base_experience}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <ul>
                        {pokemon.abilities.map((ability, i) =>
                            (<li>{ability.ability.name}</li>)
                        )}
                    </ul>

                </>
                : <div></div>
            }
        </div>

    )
}
