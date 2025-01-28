import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";


function App() {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    const value1 = parseFloat(input1) || 0;
    const value2 = parseFloat(input2) || 0;
    setSum(value1 + value2);
  };

  return (

    <>
    
    <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
      <input value={input1} onChange={(e)=> setInput1(e.target.value)}
      type="number" name="valor1" 
      className="form-control" placeholder="Monto cuota 1"
        aria-label="Username" aria-describedby="basic-addon1" />
    </div>
      <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
        <input value={input2} onChange={(e)=> setInput2(e.target.value)}
        type="number" name="valor2" 
        className="form-control" placeholder="Monto cuota 2"
          aria-label="Username" aria-describedby="basic-addon1" />

      </div>
      <div className="input-group mb-3">
      <button onClick ={handleSum} type="submit" className="btn btn-primary">Sumar</button>

      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
        <input value={sum} type="text" className="form-control" placeholder="Monto Total" 
          aria-label="Username" aria-describedby="basic-addon1" />

      </div>
    
    </>
  )

}

export default App;