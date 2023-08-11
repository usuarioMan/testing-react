import { useState } from "react";


export const CounterApp = ({value}) => {
    const [cuenta, setCuenta] = useState(value);
 return (
    <>
    <div>
    <h1>CounterApp</h1>
    <div>{cuenta}</div>
    <button onClick={() => {
      setCuenta(cuenta-1)
    }}>-1</button>
    <button onClick={() => {
      setCuenta(cuenta+1)
    }}>+1</button>
    <button onClick={() => {
      setCuenta(value)
    }}>Reset</button>
    </div>
    </>
  )
}
