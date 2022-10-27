import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

export function Cards(props) {
    const { data } = props;
    return (
      <Link to={`/planet/${data.id}`} data={data}>
        <Card sx={{ "text-align": "center" }}>
          <CardMedia
            component="img"
            alt={data.name}
            height="140"
            image={`./planets/${data.id}.jpeg`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
}