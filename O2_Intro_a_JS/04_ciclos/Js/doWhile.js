//Ejemplo de dowhile
var nombrecompleto = prompt('Ingresa tu nombre completo');
var letrabuscar = prompt('Ingresa la letra que deseas buscar');
var i = 0;
var letraactual;
var laencontre = 0;
var msg;

do
{
    letraactual = nombrecompleto.substring(i, i+1)

    if(letraactual.toLowerCase() ===letrabuscar.toLowerCase())
    {
        laencontre = 1
    }

    i++;
}
while(laencontre === 0 && i <= nombrecompleto.length)

if(laencontre === 1)
{
    msg = `Enhorabuena hemos encontrado la letra ${letrabuscar}, en la posición $(i).`; 
}
else
{
    msg = `Lo sentimos, no hemos podido encontrar la letra ${letrabuscar}, en tu nombre.`; 
}
Document.write(msg);
