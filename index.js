// ejercicio 1:  Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

// function callback(mensaje){
//    console.log(mensaje); 
// };
// function defmsg(callback){
//     let mensaje="mensaje de console.log";
//     callback(mensaje);
// }
// defmsg(callback);


// //ejercicio 2:Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

// function contenido(variabl){
//     console.log(variabl);
// };
//     function tipo(contenido){
    
//     let variabl= typeof(5);
//         contenido(variabl);
//    }     
// tipo(contenido);

// ejercicio 3:Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.

// function print(suma,resta,mult,divi){
// console.log ("numero 1 = 3");
// console.log("numero 2 = 5 ");
// console.log (`los resultados de sus numeros para las operaciones son los siguientes suma:${suma}, resta ${resta},multiplicacion:${mult}, y division: ${divi}`);
// };function operaciones(print){
// let num1 =3;
// let num2 =5;
//     let suma = num1 + num2;
//     let resta = num1-num2;
//     let mult = num1 *num2;
//     let divi = num1/num2;
//     print(suma,resta,mult,divi)
// }

// operaciones(print);

//ejercicio 4: Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO


// function convertir(palabra,Callback){
//     Callback(palabra);
// }

// function mayuscula(word){
//     return console.log(word.toLocaleUpperCase());
// };
// function minuscula(word){
//     return console.log(word.toLocaleLowerCase());
// };

// convertir("pejelagarto",minuscula);
// convertir("pejelagarto",mayuscula);

//ejercicio 5:  Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

// function filtrarMayorDosHoras(times, callback) {
//     const filtroTiempo = times.filter(timeInMinutes => timeInMinutes > 120);
//     callback(filtroTiempo);
// }

// const timeArray = [120, 80, 200, 100];
// filtrarMayorDosHoras(timeArray, console.log);


    
    

