import Card, { CardBody } from "./components/Card/Card";
import Button from "./components/Button/Button";
import UserList from "./components/UserList/UserList";
import SearchPosts from "./components/SearchPosts/SearchPosts";
import CounterWithCustomHook from "./components/CounterWithCustomHook/CounterWithCustomHook";
import CounterUseReducer from "./components/CounterUseReducer/CounterUseReducer";
// import Button from "./components/Button";
import List from "./components/List";
import Input from "./components/input";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import NameForm from "./components/NameForm";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

function ThemeButton() {
  const { theme, toggletheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={toggletheme}
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#333",
          color: theme === "light" ? "#000" : "#FFF"
        }}
      >
        Cambiar tema
      </button>
    </>
  )
}


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
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <br /><br />
      <CounterUseReducer />
      <br /><br />
      <CounterWithCustomHook />
      <br />

      <SearchPosts />
      <br />

      <UserList />
      <br />
      <Button><p>Azul</p></Button>
      <br /><br />
      <Card />
      <br />
      <Counter />
      <br />
      <ToggleButton />
      <br />
      <br />
      <NameForm />
      <br />



      <Input value={input1} onChange={(e) => setInput1(e.target.value)} placeholder={"Monto cuota 1"} />
      <Input value={input2} onChange={(e) => setInput2(e.target.value)} placeholder={"Monto cuota 2"} />

      <div className="input-group mb-3">
        <button onClick={handleSum} type="submit" className="btn btn-primary">Sumar</button>
      </div>

      <Input value={sum} onChange={(e) => setInput2(e.target.value)} placeholder={"Monto Total"} />

    </>
  )

}

export default App;