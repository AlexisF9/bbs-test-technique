import Box from "@mui/material/Box";
import { Cards } from "../cards";
import "./index.scss"

export function List(props) {
    const { data } = props;
    return (
        <Box className="list-cards">
            {data ? (
            data.length > 0 ? (
                data.map((item, i) => (
                    <div key={i}>
                        <Cards data={item} />
                    </div>
                ))
            ) : data ? (
                <Cards data={data} />
            ) : (
                <p>Aucun résultat</p>
            )
            ) : (
            <p>Chargement</p>
            )}
        </Box>
    )
}