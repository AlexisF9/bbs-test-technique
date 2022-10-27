import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

export function Planet() {
    const [data, setData] = useState()
    const params = useParams();

    useEffect(() => {
        getPlanetInfo()
    }, [])

    const getPlanetInfo = async () => {
        const rep = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${params.id}`);
        const data = await rep.json();
        setData(data);
    }

    console.log(data)

    return (
        <>
            {data ? 
                <div className="container-planet">
                    <div className="title" style={{backgroundImage: `url("../../planets/${data.id}.jpeg")` }}>
                        <div className="overlay"></div>
                        <h2>{data.name}</h2>
                    </div>

                    <div className="planet-infos">
                        <h3>Lunes :</h3>
                        {data.moons ? <ul>
                            {data.moons.map((item, i) => {
                                return (
                                    <li key={i}>{item.moon}</li>
                                )
                            })}
                        </ul> : <p>Pas de lunes</p>}
                    </div>
                    
                </div> 
            : <p>Chargement</p>}
        </>
    )
}