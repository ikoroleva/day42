import { useEffect, useState } from "react";


export function Cast(props) {

    const url = props.url;
    const [cast, setCast] = useState(null);

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);

        setCast(data);

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {cast
                ? <p>{cast.name}</p>

                : <div></div>
            }
        </div>

    )
}
