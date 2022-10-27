import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./index.scss";

export function Search(props) {
    const {setData} = props


    const getThePlanet = async (event) => {
        const rep = await fetch(
            `https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,sw,${event}&filter[]=isPlanet,eq,true`
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
      >
        <TextField onChange={(event) => getThePlanet(event.target.value)} placeholder="Trouver une planète" size="lg"/>
        {/* <Button size="small" onClick={resetSearch}>
          Reset
        </Button> */}
      </Box>
    )
}