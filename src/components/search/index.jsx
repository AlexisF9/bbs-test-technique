import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./index.scss";

export function Search(props) {
    const {setData} = props;
    const urlApi = "https://api.le-systeme-solaire.net/rest/bodies";


    const getThePlanet = async (event) => {
        const rep = await fetch(
            `${urlApi}?filter[]=id,sw,${event}&filter[]=isPlanet,eq,true`
          );  
        const data = await rep.json();
        setData(data.bodies);
    };

    return (
        <Box
        className="form"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField onChange={(event) => getThePlanet(event.target.value)} placeholder="Trouver une planète" size="lg"/>
      </Box>
    )
}