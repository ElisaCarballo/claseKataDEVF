let fruits = ['fresa', 'Platano', 'Mango', 'Durazno', 'Sandia'];

//eliminar elementos del array
fruits.splice(4,2);
console.log (fruits);
//el 2 es de donde empieza a eliminar y el 1 representa cuantos elimina


//eliminar y reemplazarlo por Pera
fruits.splice(2,1, 'Pera');
console.log (fruits);

