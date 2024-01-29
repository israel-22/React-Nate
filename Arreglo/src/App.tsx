// App.tsx
import React from 'react';
import sumarElementos from './componente/sumarElementos';
const App: React.FC = () => {
    const miArreglo = [1, 2, 3, 4, 5];
    const resultado = sumarElementos(miArreglo);

    return (
        <div>
            <h1>Suma de Elementos del Arreglo</h1>
            <p>Arreglo: [{miArreglo.join(', ')}]</p>
            <p>La suma de los elementos del arreglo es: {resultado}</p>
        </div>
    );
};

export default App;
