var documentos = ["123"]
var nombre = ["Juan"]
var valor = [5000]
var PosUsuario

var Biniciar = document.getElementById("Biniciar")
var Bregistrar = document.getElementById("Bregistrar")
var ContenedorIniciar = document.getElementById("ContenedorIniciar")
var ContenedorRegistro = document.getElementById("ContenedorRegistro")
var inputagregar = document.getElementById("inputagregar")

function cambiarformulario(boton, tipo) {
    if (tipo === true) {
        ContenedorIniciar.style.display = "flex"
        ContenedorRegistro.style.display = "none"
        boton.style.display = "none"
        Bregistrar.style.display = "initial"
    }
    else {
        ContenedorIniciar.style.display = "none"
        ContenedorRegistro.style.display = "flex"
        boton.style.display = "none"
        Biniciar.style.display = "initial"

    }
}

function iniciarSesion() {
    let flagInicio = false

    if (documentos.length !== 0 && nombre.length !== 0) {
        for (let i = 0; i < documentos.length; i++) {
            if (Icedula.value === documentos[i] && Inombre.value === nombre[i]) {
                PosUsuario = i
                flagInicio = true
            }
        }
    }

    if (flagInicio === true) {
        alert('Se inicio sesion correctamente')

        //iniciar sesion 
        funciones.style.display = "flex"
        Bregistrar.style.display = "none"
        ContenedorIniciar.style.display = "none"
        Bregistrar.style.display = "none"
        regreso.style.display = "flex"
        document.getElementById('nom_cliente').innerHTML = "Bienvenido " + nombre[PosUsuario];
        document.getElementById('valorcliente').innerHTML = "Su saldo actuamente es:  " + valor[PosUsuario];

    } else {
        alert('intentelo de nuevo')
    }
}
function Registro() {

    let flagRegistro = 0
    let flagCheck = false

    for (let i = 0; i < documentos.length; i++) {

        if (documentos[i] === Rcedula.value) {
            flagCheck = true
        }
    }

    if (Rnombre.value === "") {
        alert("El campo Nombre esta vacío");
    }
    else {
        flagRegistro++
    }
    if (Rcedula.value === "") {
        alert("El campo Cedula esta vacío");
    }
    else {
        flagRegistro++
    }
    if (Rvalor.value === "") {
        alert("El campo valor inicial esta vacío");
    }
    else {
        flagRegistro++
    }

    if (flagRegistro === 3 && flagCheck === false) {
        nombre.push(Rnombre.value)
        documentos.push(Rcedula.value)
        valor.push(parseInt(Rvalor.value))
        alert("Se envio correctamente")

        ContenedorIniciar.style.display = "flex"
        ContenedorRegistro.style.display = "none"
        Biniciar.style.display = "none"
        Bregistrar.style.display = "initial"
        Rnombre.value = ""
        Rcedula.value = ""
        Rvalor.value = ""
    }
    else if (flagCheck === true) {
        alert("ya existe un usuario con ese documento ")
    }
    else {
        alert("campos incorrectos")
    }

    console.log(nombre)
    console.log(documentos)
    console.log(valor)
}

function agregar() {

    valor[PosUsuario] = valor[PosUsuario] + (parseInt(inputagregar.value))
    document.getElementById('valorcliente').innerHTML = "Su saldo actuamente es:  " + valor[PosUsuario];
    inputagregar.value = ""

}

function retirar() {

    if (valor[PosUsuario] > parseInt(inputretirar.value)) {
        valor[PosUsuario] = valor[PosUsuario] - (parseInt(inputretirar.value))
        document.getElementById('valorcliente').innerHTML = "Su saldo actuamente es:  " + valor[PosUsuario];

    }
    else {
        alert("El valor ingresado supera el monto")
    }
    inputretirar.value = ""

}

function regresar() {
    ContenedorIniciar.style.display = "flex"
    Bregistrar.style.display = "initial"
    funciones.style.display = "none"
    regreso.style.display = "none"
    PosUsuario = null;
    Icedula.value = ""
    Inombre.value = ""
}

function informes() {

    var informe = document.getElementById("informes")
    let i
    for (i = 0; i < nombre.length; i++) {
        alert("Los informes son: \n" + nombre[i] + "\n" + valor[i])
    }
}