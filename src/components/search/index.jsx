import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./index.scss";

export function Search(props) {
    const {setData, getData} = props

    const [search, setSearch] = useState();

    const getThePlanet = async (e) => {
        e.preventDefault();
    
        let rep;
    
        if (search === "") {
          getData();
        } else {
          rep = await fetch(
            `https://api.le-systeme-solaire.net/rest/bodies/${search}`
          );
        }
    
        const data = await rep.json();
        setData(data);
      };

    const resetSearch = () => {
        setSearch("")
        getData()
    }

    return (
        <Box
        className="form"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={getThePlanet}
      >
        <TextField value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Trouver une planète" size="lg"/>
        <Button size="small" onClick={resetSearch}>
          Reset
        </Button>
      </Box>
    )
}