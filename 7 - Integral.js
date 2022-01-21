/* Mayor, menor o igual
Crear una función llamada mayorMenorIgual, la cual recibe 2 parámetros numéricos,
 y deberá indicar si el número es menor, mayor o igual al segundo parámetro.
Deberá retornar el siguiente mensaje según corresponda.
Si es menor: “El número (N1) es menor que (N2)”;
Si es mayor: "El número (N1) es mayor que (N2)";
Si es igual: "El número (N1) es igual a (N2)". (Al momento de ingresar la respuesta en el
form se deberá ingresar la invocación/ejecución de la función). Ej: mayorMenorIgual(15,3) // “El número 15 es mayor que 3” */

function mayorMenorIgual(num1, num2){
    if (num1 < num2){
        return "El número " + num1 + " es menor que " + num2
    } else if (num1 > num2){
        return "El número " + num1 + " es mayor que " + num2
    }else {
        return "El número " + num1 + " es igual que " + num2
    }
}

console.log(mayorMenorIgual(15, 3))
console.log(mayorMenorIgual(3, 3))
console.log(mayorMenorIgual(1, 3))

/*Generaciones
Crea una función llamada generacion, la cual reciba por parámetro el año de nacimiento y retorne la generación a la que pertenece según 
las siguientes características: "Baby boomer" si es menor o igual a 1964"; Generación X" si es entre 1965 y 1981; "Millennial" si es entre
1982 y 1997"; Generación Z" si es mayor a 1997. (Al momento de ingresar la respuesta en el form se deberá ingresar la invocación/ejecución
de la función). Ej: generacion(1993) // "Millennial" */

function generacion(nacimiento){
    if (nacimiento <= 0){
        return "Año de nacimiento no valido"
    }else{
        if (nacimiento <= 1964){
            return "Baby boomer"
        }else if ((nacimiento >= 1965) && (nacimiento <= 1981)){
            return "Generación x"
        }else if ((nacimiento >= 1982) && (nacimiento <= 1997)){
            return "Millennial"
        }else {
            return "Generación z"
        }
    }
}

console.log(generacion(1950))
console.log(generacion(2003))
console.log(generacion(-5))
console.log(generacion(1990))

/*
Crear la función mayorMenorQue100, la misma recibe dos números como parámetro. 
Deberá sumarlos y retornar “La suma de (N1) y (N2), es menor que 100” en el caso que la suma de ambos sea menor que 100; 
“La suma de (N1) y (N2), es mayor que 100” si dicha suma es mayor; o “La suma de (N1) y (N2) es exactamente 100” en el caso de que la suma de 100. 
(Al momento de ingresar la respuesta en el form se deberá ingresar la invocación/ejecución de la función). 
Ej.: mayorMenorQue100(57, 43) // “La suma de 57 y 43 es exactamente 100” */

function mayorMenorQue100(numero1, numero2){
    let suma = numero1 + numero2
    if (suma > 100){
        return 'La suma de ' + numero1 + ' y ' + numero2 + ' es mayor que 100'  
    }else if(suma < 100){
        return 'La suma de ' + numero1 + ' y ' + numero2 + ' es menor que 100'
    }else {
        return "La suma de " + numero1 + " y " + numero2 + " es exactamente 100"
    }
}

console.log (mayorMenorQue100(23, 20))
console.log (mayorMenorQue100(300, 20))
console.log (mayorMenorQue100(57, 43))

