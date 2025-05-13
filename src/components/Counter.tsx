import { useEffect, useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambió a: ${count}`)
    }, [count])

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    )
}

export default Counter;