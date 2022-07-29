// Variables para limite de intentos
let entryCount = 1
let entryLimit = 3
let error = false

// Variables para cambio de pagina
let mainScreen = document.getElementById('mainScreen')
let contentAccountScreen = document.createTextNode("Account Screen")
let accountScreen = document.createElement("span").setAttribute("id","accountScreen")
let saldo = 1000
localStorage.setItem('saldo')

// Logins
let  usuarios = [{user='Emilo',pass='10'},{user="Andrea", pass=mieldemaple},{user="Hugo", pass=malvavisco}]


function login(){
    let response
    user = document.getElementById('user')
    pass = document.getElementById('password')
    bal = 1000
    if (user.value === 'Emilio' && pass.value === "abc123"){
        window.location.href = "cajero.html"
        
    } else{
        if (entryCount < entryLimit) {
        entryCount++;
        alert('Contraseña o usuario invalido, intentelo nuevamente')
    } else {
        alert('Pasaste el limite de intentos')
        window.location.href = "index.html"
        } 
    }
}