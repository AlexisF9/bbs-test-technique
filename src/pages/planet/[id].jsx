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
                        <img src={`../planets/${data.id}.jpeg`}/>
                    </div>

                    <div className="planet-infos">
                            {data.bodyType && <p>Type : {data.bodyType}</p>}
                            {data.englishName && <p>Nom en anglais : {data.englishName}</p>}
                            {data.discoveredBy && <p>Découvert par {data.discoveredBy}</p>}
                            {data.discoveryDate && <p>Découvert le {data.discoveryDate}</p>}
                            {data.density && <p>Densité : {data.density}</p>}
                            {data.gravity && <p>Gravité : {data.gravity}</p>}
                        </div>
                </div> 
            : <p>Chargement...</p>}
        </>
    )
}