console.log(`1.- Muestra un mensaje en consola mediante un callback.
La función de orden superior que escribas debe poder mostrar
el mensaje como console.warn, console.log, console.info,
o cualquier método para pintar en consola del objeto console.`);

const warn = (msg) => {
  console.log("callback");
  console.warn(msg);
};

const log = (msg) => {
  console.log("callback");
  console.log(msg);
};

const error = (msg) => {
  console.log("callback");
  console.error(msg);
};

const HOF = (callback, msg) => {
  console.log("ordenSuperior");
  return callback(msg);
};

HOF(error, "Esto es un mensaje desde orden superioor");

console.log(`2.- Crear una función de orden superior que reciba como
argumento una variable de cualquier tipo y un callback.
La función de orden superior debe retornar como resultado,
mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.`);

const typeofVariable = (variable) => {
  console.log(typeof variable);
};

const HOF2 = (callback, variable) => {
  console.log("orden superior");
  return callback(variable);
};

HOF2(typeofVariable, 5);

console.log(`3.- Crear una función de orden superior que reciba como 
argumentos dos números y un callback. Según el callback
que se pase a la función, se devuelve la suma de los
dos números, la resta de los dos números o la
multiplicación de los dos números.`);

const suma = (a, b) => {
  console.log(a + b);
};

const resta = (a, b) => {
  console.log(a - b);
};

const multiplicacion = (a, b) => {
  console.log(a * b);
};

const HOF3 = (callback, a, b) => {
    console.log("orden superior");
  return callback(a, b);
};

HOF3(multiplicacion, 35, 3);

console.log(`4.- Escribe una función de orden superior que reciba una cadena de
caracteres y debe devolver, mediante un callback, la
cadena de caracteres en mayúsculas o en minúsculas.
   ordenSuperior(“PejeLagarto”, minus);
   -> pejelagarto
   ordenSuperior(“PejeLagarto”, mayus);
   -> PEJELARTO`)

const Upper = (message) => {
    console.log(message.toUpperCase() )
}

const Lower = (message) => {
    console.log(message.toLowerCase())
}

const HOF4 = (callback, message) => {
    console.log("orden superior");
    return callback(message)
}

HOF4(Upper, "Hola mi nombre es Angelo")

console.log(`5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
mayores a dos horas (hacer la comparación en horas) 
mediante un callback.`)

const arrayMinutes = [120, 200, 300, 20]
const arrayMinutes2 = [120, 80, 200, 100]

const Quantity = (param) => {
    const hours = arrayMinutes.map(function(hour) {
        return hour / 60;
    })

    const result = hours.filter(hour => hour > 2)
    console.log('Resultado::', result)
}

const HOF5 = (callback, param) => {
    console.log('orden superior')
    return callback(param)
}

HOF5(Quantity, arrayMinutes)