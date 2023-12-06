import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap"


function App() {
  const numeros1 = [1,2,3,4,5]
  const numeros2 = [6,7,8,9,10]

  //Usamos spread operator para fusionr 2 arrays en la parte logica. 

  const numerosTotal = [...numeros1, ...numeros2]
  console.log(numerosTotal)

  // Trabajando con Objetos y spread
const persona = {
  nombre: "Karen",
  apellido: "Simar"
}
const personaConProfesion = {
  ...persona,
  profesion: "programadora"
}

console.log(personaConProfesion)


//Destructuracion. reduzco la forma de llamar luego a la variable para no usar personaConProfesion.nombre

const {nombre, apellido, profesion} = personaConProfesion;

console.log(nombre);
console.log(apellido);
console.log(profesion);

const [num1, num2, num3, ...numeros] = numeros1;

console.log(num1);
console.log(num2);
console.log(numeros);

//Maping es similar al ForEach pero devuelve un arreglo el Map
//const numeros1 = [1,2,3,4,5]

const arregloMapeado = numeros1.map(num => ("soy el numero" + num));

console.log(arregloMapeado);

// Filter devuelve un arreglo con la condición seteada.

const mayorA2 = numeros1.filter (num => num > 2);

console.log(mayorA2);


  // Acá usamos la parte grafica luego del return para el DOM
  return (
    <>
    <h1>Hola Mundo</h1>
    
        </>
  )
}

export default App
