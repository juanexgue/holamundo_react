import Card, { CardBody } from "./components/Card/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";


function App() {

  const [data, setData] = useState(["Goku", "Tanjiro", "Eren"]);

  /*
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  
    const list: string[] = ["Goku", "Tanjiro", "Eren"]
  
    const handleSelect = (elemento: string) => {
      console.log("imprimiendo", elemento);
    };
  
    const contenido = list.length !== 0 && (<List data={list} onSelect={handleSelect} />);
  
    return (
      <Card>
        <CardBody title="Hola Mundo" text="Este es el texto" />
        {contenido}
  
        <Button isLoading={isLoading} onClick={handleClick}>
          Hola mundo
        </Button>
      </Card>
    );*/

  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data} />
    </Card>
  )

}

export default App;