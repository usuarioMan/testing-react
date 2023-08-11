import { CounterApp } from "../src/components/CounterApp";
import { render, screen} from "@testing-library/react";


describe('Test en CounterApp', () => {
    
    test('Esta prueba debe coincidir con el snapshot', () => {
    const {container} = render(<CounterApp value={420}/>)
    expect(container).toMatchSnapshot()
    
   })
   
   test('Esta prueba debe iniciar el valor inicial 420', () => {
    render(<CounterApp value={420}/>)
    expect(screen.getByText(420)).toBeTruthy()
    
   })

 })