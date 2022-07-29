// declaracion objeto literal
let vehiculo = {
    marca : "Toyota",
    color : "rojo",
    Modelo : "2022",
    Tipo : "Sedan",
    Valor : 120000000,
    Tipollanta : ['Pirelli', 'Goodyear', 'Michelin'],
    Enstock : true,
    Estado : function (estado) {
        if(estado == 1){ 
            return 'El vehiculo se apagó';
        }
        else{
            return 'El vehiculo se encendió';
        }
    },
    Mantenimiento : (estado) => estado == 1 ? console.log ('El vehiculo ya termino su mantenimiento') : console.log('El vehiculo necesita mantenimiento')
}

console.log("El vehiculo es de marca: " + vehiculo.marca + "  y tiene un valor de: " + vehiculo.valor);

//Temple String
console.log(`El vehiculo es de marca: ${vehiculo.marca} y tiene un valor de: ${vehiculo.valor}`);

//Desestructuracion de objetos
const {Tipo, Modelo, Color, Marca} = vehiculo;
console.log(`El vehiculo es de color : ${color} y es del año: ${Modelo}`);
// let modelo = vehiculo.Modelo;
// let = vehiculo.

//Acceder Arreglo dentro de una pregunta
console.log(vehiculo.Tipollanta[1]);

//acceder a un metodo del objeto
console.log (vehiculo.estado(1));
console.log (vehiculo.estado(0));