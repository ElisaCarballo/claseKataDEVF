// 1.-Palindromo----------------------------------------------------------------------------------------------
// // Escribiendo la función palindrome checker en javascript .
// function palindromeChecker(str) {
//     const strReversed = str.split("").reverse().join("");
  
//     return strReversed === str ? "True" : "False";
//   }
//   console.log(palindromeChecker("oso"));
//   console.log(palindromeChecker("hola"));
//   console.log(palindromeChecker("somos o no somos"));

// //   Añadir expresión regular para eliminar espacios en blanco del string
//   function palindromeChecker(str) {
//     const newStr = str.replace(/[\W_]/g, "").toLowerCase();
//     const strReversed = newStr.split("").reverse().join("");
  
//     return newStr === strReversed ? "True" : "False";
//   }

// 2.Celsius a Ferenheit y viceversa-----------------------------------------------------------------------------------------------------------
// const celsius = prompt("Ingresa el valor en °C: ");

// const fahrenheit = (celsius * 9/5) + 32

// console.log(`${celsius} grado celsius es igual a ${fahrenheit} grado farenheit.`);



// const fahrenheit1 = prompt("Ingresa el valor en °F: ");

// const celsius1 = (fahrenheit1 - 32) * 5/9

// console.log(`${fahrenheit1} grado farenhei es igual a ${celsius1} grado celsius.`);
