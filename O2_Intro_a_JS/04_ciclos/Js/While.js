//Ejemplo de While
var nombrecompleto = prompt('ingresa tu nombre completo');
var letrabuscar = prompt('ingresa la letra que quieres saber cuantas veces tienes en tu nombre')
var i = 0
var letraactual
var cantidad = 0; 
//.leng me dice cuantos caracteres tiene en este caso el nombre completo
while(i <= nombrecompleto.length)
{
    //Substring permite extraer una cantidad de caracteres especifica de un string
    letraactual = nombrecompleto.substring(i, i+1);

    //validamos si la letra es igual a la que pidio el usuario
    if(letraactual.toLowerCase() === letrabuscar.toLowerCase())
    {
        //Variable contador forma más utilizada
        cantidad  ++;
    }

    //varianle contador forma más básica
    i = i + 1;
}

document.write(`La letra ${letrabuscar}, aparece ${cantidad} veces en tu nombre`);