import Card, { CardBody } from "./components/Card";
import List from "./components/List";


function App() {
const list= ["Goku", "Ranjirou","Jayirove"]

const handleSelect = (elemento: string) => {
  console.log("imprimiendo", elemento);
};

return (
<Card>
    <CardBody title="Hola Mundo" text="Este es el texto" />
    <List data={list} onSelect={handleSelect}/>
  </Card>
);
}

export default App;