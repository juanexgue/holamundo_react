import useCounter from "../../hooks/useCounter"

const CounterWithCustomHook = () => {
    const { count,
        increment,
        decrement,
        reset,
    } = useCounter(10);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterWithCustomHook;