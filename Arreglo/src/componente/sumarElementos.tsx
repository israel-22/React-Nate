import React, { useState } from 'react';

const sumarElementos: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const calcularSumaArreglo = () => {
    const elementos = inputValue.split(',').map(item => parseInt(item.trim()));
    const suma = elementos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setResultado(suma);
  };

  return (
    <div>
      <h2>Calculadora de Suma de Arreglo</h2>
      <h3></h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese los elementos del arreglo separados por comas"
      />
      <button onClick={calcularSumaArreglo}>Calcular Suma</button>
      {resultado !== null && (
        <p>La suma de los elementos del arreglo es: {resultado}</p>
      )}
    </div>
  );
};


export default sumarElementos;
