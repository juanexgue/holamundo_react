import { useState } from "react"

function useCounter(inicialValue = 0) {
    const [count, setCount] = useState(inicialValue)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(inicialValue)

    return {
        count,
        increment,
        decrement,
        reset,
    }
}

export default useCounter;
