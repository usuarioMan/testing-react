# Notas sobre pruebas.

Aquí tienes una tabla con algunos de los métodos más comunes proporcionados por la biblioteca `screen` de React Testing Library, junto con breves explicaciones de lo que hacen:

| Método                   | Descripción                                                                                                                                                                               |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `screen.getByText(text)` | Busca un elemento en el DOM que contenga el texto especificado. Útil para encontrar elementos basados en su contenido de texto.                                                      |
| `screen.getByRole(role)` | Busca un elemento en el DOM por su atributo de rol (por ejemplo, "button", "link", "heading", etc.). Útil para elementos que tienen un propósito específico en la accesibilidad.      |
| `screen.getByTestId(id)` | Busca un elemento en el DOM por el atributo `data-testid`, que se utiliza comúnmente para identificar elementos en pruebas.                                                            |
| `screen.getByPlaceholderText(text)` | Busca un elemento de entrada por su texto de marcador de posición. Útil para encontrar campos de entrada y áreas de texto.                                                      |
| `screen.getByLabelText(text)`       | Busca un elemento de entrada por su etiqueta asociada. Útil para encontrar campos de entrada y áreas de texto etiquetados.                                                        |
| `screen.getByAltText(text)`         | Busca un elemento de imagen por su atributo `alt`. Útil para verificar la presencia de imágenes y su texto alternativo.                                                          |
| `screen.getByTitle(text)`           | Busca un elemento por su atributo `title`. Útil para encontrar elementos con títulos emergentes o información adicional.                                                        |
| `screen.getByDisplayValue(value)`   | Busca un elemento de entrada por su valor actual. Útil para elementos como campos de entrada y selectores.                                                                      |
| `screen.getByTestId(id)`            | Busca un elemento por su atributo `data-testid`. Similar a `getByTestId`, pero puede haber una colisión si múltiples elementos tienen el mismo ID de prueba.                 |
| `screen.queryBy...`                 | Variante de los métodos anteriores, pero devuelve `null` en lugar de arrojar un error si el elemento no se encuentra. Útil para verificar la ausencia de elementos.      |
| `screen.getAllBy...`                | Retorna una matriz de todos los elementos que coinciden con el criterio de búsqueda. Útil cuando se espera que haya múltiples elementos que cumplan ciertas condiciones. |
| `screen.queryAllBy...`              | Variante de `getAllBy...` que devuelve una matriz vacía en lugar de arrojar un error si no se encuentran elementos.                                                           |
Por supuesto, aquí tienes ejemplos de código utilizando algunos de los métodos de la biblioteca `screen` de React Testing Library:

1. Ejemplo usando `getByText`:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('encuentra un elemento por texto', () => {
  render(<App />);
  
  const elemento = screen.getByText('Bienvenido a mi aplicación');
  expect(elemento).toBeInTheDocument();
});
```

2. Ejemplo usando `getByRole`:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('encuentra un botón por su atributo de rol', () => {
  render(<App />);
  
  const boton = screen.getByRole('button', { name: 'Enviar' });
  expect(boton).toBeInTheDocument();
});
```

3. Ejemplo usando `getByTestId`:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('encuentra un elemento por su atributo data-testid', () => {
  render(<App />);
  
  const elemento = screen.getByTestId('mi-elemento-especial');
  expect(elemento).toBeInTheDocument();
});
```

4. Ejemplo usando `queryByLabelText`:

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('encuentra un campo de entrada por su etiqueta asociada', () => {
  render(<App />);
  
  const campo = screen.queryByLabelText('Nombre');
  expect(campo).toBeInTheDocument();
});
```

Recuerda que estos ejemplos son solo ilustrativos y que la estructura real de tu código y los nombres de los elementos pueden variar según tu aplicación. Además, estos ejemplos no contienen el código completo de las aplicaciones (`<App />`), ya que el enfoque principal es mostrar cómo se utilizan los métodos de `screen`.