//paso1: Definimos variables de entrada y uso interno del algoritmo
var nombrecompleto;
var añonacimiento, añoactual;
var genero;
var edad;
var vivenortepais;
var embarazada;
var TieneNuevesemanasdegestación;

//Paso 2: Solicitar datos al usuario
nombre = prompt('ingresa tu nombre completo');
añonacimiento = Number (prompt('ingresa tu año de nacimiento'));
añoactual = Number (prompt ('ingresa el año actual'));
genero = prompt ('selecciona tu genero : F=Femenino, M=Masculino');
vivenortepais = prompt ('¿Vives en un estado al norte al pais? Respuesta: S o N');

//Paso 3: Desarrollar la logica de Negocio
if(nombrecompleto !== '' && !isNaN(añonacimiento) &&  !isnan(añoactual) && genero !== '' && vivenortepais !== '')
{
    edad = añoactual - añonacimiento;

//validamos si la persona es menor de 18 años
if(edad <18 )
{
    alert(`lo sentimos ${nombrecompleto}, aun no puedes vacunarte, porque eres menor de edad`);
}
else
{
    //Validamos si vive en el norte del Pais
    if(vivenortepais.toUpperCase() ==='S')
    {
        //validamos si es Masculino o Femenino
        if(genero.toUpperCase() === 'F')
        {
            embarazada = prompt('¿Estas embarazada? Respuesta: S o N');

            //Validamos si esta embarazada o no
            if(embarazada.toUpperCase() === 'S')
            {
                TieneNuevesemanasdegestación = prompt('¿Tienes más de Nueve Semanas de Gestación? Respuesta: S o N');

                //Validamos si tiene nueve semanas de gestación
                if(TieneNuevesemanasdegestación.toUpperCase() === 'S')
                {
                    if (edad >= 30)
                    {
                        alert(`Felicitaciones ${nombrecompleto}, ya puedes vacunarte`);
                    }
                    else 
                    {
                        alert(`Lo sentimos ${nombrecompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años `);
                    }
                }
                else
                {
                    alert(`Lo sentimos ${nombrecompleto}, aún no puedes vacunarte, porque corre riesgo tu bebe`);
                }
            }
            else
            {
                if (edad >= 30)
                {
                    alert(`Felicitaciones ${nombrecompleto}, ya puedes vacunarte`);
                }
                else 
                {
                    alert(`Lo sentimos ${nombrecompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años `);
                }
            }
        }
        else
        {
            if (edad >= 30)
                {
                    alert(`Felicitaciones ${nombrecompleto}, ya puedes vacunarte`);
                }
                else 
                {
                    alert(`Lo sentimos ${nombrecompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años `);
                }
        }
