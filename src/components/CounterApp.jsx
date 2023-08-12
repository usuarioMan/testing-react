import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const CounterApp = ({value}) => {
    const [cuenta, setCuenta] = useState(value);
 return (
    <>
    <div>
    <h1>CounterApp</h1>
    <div>{cuenta}</div>
    <button aria-label="rest-btn" onClick={() => {
      setCuenta(cuenta-1)
    }}>-1</button>
    <button aria-label="plus-btn" onClick={() => {
      setCuenta(cuenta+1)
    }}>+1</button>
    <button aria-label="reset-btn" onClick={() => {
      setCuenta(value)
    }}>Reset</button>
    </div>
    </>
  )
}
