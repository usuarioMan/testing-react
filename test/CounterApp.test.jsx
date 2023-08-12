/* eslint-disable no-undef */
import { CounterApp } from "../src/components/CounterApp";
import { fireEvent, render, screen} from "@testing-library/react";


describe('Test en CounterApp', () => {
    
    test('Esta prueba debe coincidir con el snapshot', () => {
    const {container} = render(<CounterApp value={420}/>)
    expect(container).toMatchSnapshot()
    
   })
   
   test('Esta prueba debe iniciar el valor inicial 420', () => {
    render(<CounterApp value={420}/>)
    expect(screen.getByText(420)).toBeTruthy()
   })


    test('Esta prueba demuestra como simular eventos y probarlos', () => {
      // sujeto de prueba
      render(<CounterApp value={420}/>)

      // Accion sobre el sujeto (Funcione el mas)
      fireEvent.click( screen.getByRole('button', {name: 'plus-btn'}) )
      expect( screen.getByText(421) ).toBeTruthy()
      
      // Accion sobre el sujeto (Funcione el mas)
      fireEvent.click( screen.getByRole('button', {name: 'rest-btn'}) )
      expect( screen.getByText(420) ).toBeTruthy()
      
      // Accion sobre el sujeto (Funcione el reset)
      fireEvent.click( screen.getByRole('button', {name: 'reset-btn'}) )
      expect( screen.getByText(420) ).toBeTruthy()
   })

   


 })