import Box from "@mui/material/Box";
import { Cards } from "../cards";
import "./index.scss"

export function List(props) {
    const { data } = props;

    return (
        <Box className="list-cards">
            {data && data.map((item, i) => (
                    <div key={i}>
                        <Cards data={item} />
                    </div>
                ))}
        </Box>
    )
}