//Definicion de clases de POO
class Vehiculo {
    constructor (modelo, valor, color, marca){
        this.Marca = marca;
        this.Valor = valor;
        this.Modelo = modelo;
        this.Color = color;
        this.Estado = function (estado) {
            if(estado == 1){ 
                return 'El vehiculo se apagó';
            }
            else{
                return 'El vehiculo se encendió';
            }
        }
    }

//creamos copia de la clase vehiculo
let vehiculo1 = new Vehiculo ('Toyota', 'rojo', 2022, 230000);
let vehiculo2 = new Vehiculo ('Nissan', 'negro', 2021, 200000);
let vehiculo3 = new Vehiculo ('chevrolet', 'plata', 2023, 150000);

console.log(vehiculo1.Marca);
console.log(vehiculo2.Marca);
console.log(vehiculo1.Estado(1));
console.log(vehiculo2.Estado(0));

let arregloVehiculos = [vehiculo1, vehiculo2, vehiculo3];

function obtenernombre (objeto){
    return objeto.Marca;
}

//obtener propiedades con Map
let nombrevehiculos = [arreglovehiculos.map(obtenernombre)];

console.log(nombreVehiculos);

function filterValor (objeto){
    if (objeto.valor <= 200000){
        return objeto;
    }
}
//Filtrar propiedades con filter
let filterVehiculos = arregloVehiculos.filter(filterValor);

console.log(filterVehiculos)
