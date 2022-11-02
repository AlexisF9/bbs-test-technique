import { useEffect, useState } from "react";
import { List } from "../components/list";
import { Search } from "../components/search";

function App() {
  const [data, setData] = useState();
  const urlApi =
    "https://api.le-systeme-solaire.net/rest.php/bodies?filter=isPlanet,eq,true";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const rep = await fetch(urlApi);
    const data = await rep.json();
    setData(data.bodies);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <img src="./favicon.png" alt="logo" />
          <h1>Les planètes du système solaire</h1>
        </div>
        <Search setData={setData} />
      </div>
      <List data={data} />
    </div>
  );
}

export default App;
