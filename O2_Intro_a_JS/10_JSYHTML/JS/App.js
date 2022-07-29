//variable global
let otro = document.getElementById ('otro');

function Registrar(){
    let datosbasicos = [];
    let m = document.getElementById('m');
    let f = document.getElementById('f');
    let registro = document.getElementById('registro');
    let acepto = document.getElementById('acepto');
    let genero, terminos;

    datosbasicos.push (document.getElementById('nombre').value);
    datosbasicos.push (document.getElementById('apellido').value);
    datosbasicos.push (document.getElementById('edad').value);
    datosbasicos.push (document.getElementById('fechaNac').value);
    datosbasicos.push (document.getElementById('dirección').value);
    datosbasicos.push (document.getElementById('celular').value);
    
    //valido el genero
    if(m.checked === true){
        genero = 'masculino';
    }else if (f.checked === true){ 
        genero = 'femenino';
    }else{
        genero = otro.value;
    }

    datosbasicos.push(genero);

    //valido si acepto los terminos
    if(acepto.checked === true){
        terminos = 'si';

    datosbasicos.push(terminos);
    
    const tr = document.createElement('tr');

        //agregar nodos a la tabla
        for (let i = 0; i<datosbasicos.length; i++){ 
            //agrego el registro a la tabla
            const td = documen.createElement('td');
    
            let texto = document.createTextNode(datos.basicos[i]);

            td.appendchild(texto);
            tr.appendChild(td);
        }
        registro.appendChild(tr);
    
    }else{ 
        alert('Para registrarte tienes que aceptar los terminos')
    }
}

function validargenero (parametro){
    if(parametro === 3){
        otro.style.display = 'inline-block';
    }else{
        otro.style.display = 'none';
    }
}