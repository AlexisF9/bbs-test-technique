import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import "./index.scss";

export function Cards(props) {
    const { data } = props;

    return (
      <Link to={`/planet/${data.id}`} data={data}>
        <Card className="card" sx={{ "text-align": "center", "border-radius": "20px" }}>
          <CardMedia
            component="img"
            alt={data.name}
            height="300"
            image={`./planets/${data.id}.jpeg`}
          />
          <Typography className="card-title" variant="h5" component="div">
            {data.name}
          </Typography>
        </Card>
      </Link>
    )
}