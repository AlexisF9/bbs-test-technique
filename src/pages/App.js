import { useEffect, useState } from "react";
import { List } from "../components/list";
import { Search } from "../components/search";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const rep = await fetch(
      "https://api.le-systeme-solaire.net/rest.php/bodies?filter=isPlanet,eq,true"
    );
    const data = await rep.json();
    setData(data.bodies);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Les planètes du système solaire</h1>
        <Search setData={setData} getData={getData} />
      </div>
      <h2 className="subtitle">Résultat(s) :</h2>
      <List data={data} />
    </div>
  );
}

export default App;
