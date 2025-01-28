import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";


function realizarOperacion(e){
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value);
  const v2 = parseInt(e.target.valor2.value);
  const suma = v1 + v2;
  alert("La suma es :"+suma)
}


function App() {

  return (

    <>
    <form onSubmit={realizarOperacion}>
    <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
      <input type="number" name="valor1" className="form-control" placeholder="Monto cuota 1"
        aria-label="Username" aria-describedby="basic-addon1" />
    </div>
      <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
        <input type="number" name="valor2" className="form-control" placeholder="Monto cuota 2"
          aria-label="Username" aria-describedby="basic-addon1" />

      </div>
      <div className="input-group mb-3">
      <button type="submit" className="btn btn-primary">Sumar</button>

      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">S/.</span>
        <input type="text" className="form-control" placeholder="Monto Total"
          aria-label="Username" aria-describedby="basic-addon1" />

      </div>
      </form>
    </>
  )

}

export default App;