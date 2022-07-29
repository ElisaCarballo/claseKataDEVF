class Alumno {
    constructor(nombre, apellido, calificacion, inscrito) {
        this.nombre = nombre
        this.apellido = apellido
        this.inscrito = inscrito
        this.calificacion = calificacion
        this.materia.push = [{materia : "Español, calif : 90}, {materia : "Ingles", calif: 80}]
    }

    esta_inscrito() {
        if(this.inscrito) //es true o false
            console.log("El alumno está inscrito");
        else
            console.log ("El alumno no está inscrito");    
    }

    sacarPromedio(){
        let numeros = this,calificacion, suma=0, promedio;
        numeros.forEach(function(numero){
            suma += numero;
            promedio = suma/5
        });
        console.log(suma);
        console.log(promedio);
        return promedio;

    }

    ObtenerInicialdelAlumno (){

        let inicial = this.nombre.charAt(0); //retorna ""
        console.log(inicial);
        return inicial;
    }

    ObtenerNombreCompleto(){
        let NombreCompleto = (this.nombre + ' ' + this.apellido);
        console.log(NombreCompleto);
    }

    aprobado({
        let numeros = this,calificacion, suma=0, promedio;
        numeros.forEach(function(numero){
            
            suma += numero;
            promedio = suma/5
        });
        if(promedio=>60){
            return 'Aprobado';
        }
        else{
            return 'Reprobado'
        }
}
let Alumno = new Alumno ('Elisa', 'Carballo', true, 90, 80,90, 90,90);

Alumno1.ObtenerInicialdelAlumno();
Alumno1.ObtenerNombreCompleto();
Alumno1.sacarPromedio();
Alumno1.aprobado();