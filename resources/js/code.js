/*Menú para mostrar los ejercicios de uno en uno o todos a la vez
* Se ha realizado utilizando únicamente javascript (con jquery sería más sencillo)
* Capturamos el input button que está checkeado al momento y dependiendo de cual sea
* mostramos un ejercicio u otro, o por el contrario si seleccionamos la opción "Mostrar Todos"
* se mostrarán todos los ejercicios.*/
function mostrarEjercicios(){
    var buttonChecked = document.querySelector('input[name="ejercicio"]:checked').value;

    switch (buttonChecked) {
        case "Ejercicio1":
            document.querySelector("#ejercicio1").classList.remove("ocultar");
            document.querySelector("#ejercicio2").classList.add("ocultar");
            document.querySelector("#ejercicio3").classList.add("ocultar");
            document.querySelector("#ejercicio4").classList.add("ocultar");
            break;
        case "Ejercicio2":
            document.querySelector("#ejercicio1").classList.add("ocultar");
            document.querySelector("#ejercicio2").classList.remove("ocultar");
            document.querySelector("#ejercicio3").classList.add("ocultar");
            document.querySelector("#ejercicio4").classList.add("ocultar");
            break;
        case "Ejercicio3":
            document.querySelector("#ejercicio1").classList.add("ocultar");
            document.querySelector("#ejercicio2").classList.add("ocultar");
            document.querySelector("#ejercicio3").classList.remove("ocultar");
            document.querySelector("#ejercicio4").classList.add("ocultar");
            break;
        case "Ejercicio4":
            document.querySelector("#ejercicio1").classList.add("ocultar");
            document.querySelector("#ejercicio2").classList.add("ocultar");
            document.querySelector("#ejercicio3").classList.add("ocultar");
            document.querySelector("#ejercicio4").classList.remove("ocultar");
            break;
        case "Todos":
            document.querySelector("#ejercicio1").classList.remove("ocultar");
            document.querySelector("#ejercicio2").classList.remove("ocultar");
            document.querySelector("#ejercicio3").classList.remove("ocultar");
            document.querySelector("#ejercicio4").classList.remove("ocultar");
            break;
        default:
        // code block
    }
}

//Función que comprueba si la cadena de entrada es un palíndromo (se lee igual hacia delante que hacia atrás).
function comprobarCadenaPalindromo(){

    /*Primero capturamos la cadena introducida en el input con document.getElementById("recurso1").value
    * Después tranformamos esa cadena a minúsculas con .toLowerCase()
    * Le quitamos los espacios que puedan venir por delante o por detrás a la cadena con .trim()
    * Y finalmente remplazamos todos los caracteres especiales (como ,.@) y los numéricos por nada para poder comparar los caracteres
    * */
    var cadena = document.getElementById("recurso1").value.toLowerCase().trim().replace(/[^a-zA-Z]/g, "");

    //Después le damos la vuelta a la cadena obtenida anteriormente
    var cadenaAlreves = cadena.split("").reverse().join("");

    //Y comparamos, con un comparador estricto '===' si las cadenas son iguales, significa que podemos leerlo
    //hacia delante y hacia atrás igual
    if(cadena === cadenaAlreves){
        document.getElementById("respuesta1").innerHTML = "SI";
    }else{
        document.getElementById("respuesta1").innerHTML = "NO";
    }
}

/*Función que comprueba cual de los dos números introducidos por el usuarios es mayor,
* para ello se ha utilizado la clase prompt de javascript que muestra un dialogo box donde
* introducir los dos números.*/
function comprobarMayor(){

    //Se introducen los número en el dialogo box y se parsea el dato a Int para que sea numérico
    var valor1 = parseInt(prompt("Introduzca el valor 1"));
    var valor2 = parseInt(prompt("Introduzca el valor 2"));

    //Se comprueba si los valores son numéricos con la unción global isNAN (is Not a Number)
    if(!isNaN(valor1) && !isNaN(valor2)){
        //Se realiza la comprobación de cual es mayor y se inserta en el httml para mostrar la solución
        if(valor1>valor2){
            document.getElementById("respuesta2").innerHTML = "El número mayor es: "+valor1;
        }else if (valor1<valor2){
            document.getElementById("respuesta2").innerHTML = "El número mayor es: "+valor2;
        }else{
            document.getElementById("respuesta2").innerHTML = "Son iguales: valor 1= "+valor1+" valor 2= "+valor2;
        }
    }else{
        document.getElementById("respuesta2").innerHTML = "Los valores introducidos no son numéricos";
    }
}

/*Función que escribe todas las bocales que aparecen en una frase que ha introducido el usuario.
* Para este caso también se ha utilizado la función prompt que abre un dialogo box donde introducir la frase.*/
function escribirVocales(){

    //Introducimos la frase en el dialogo box que muestra la clase prompt
    var frase = prompt("Introduzca una frase");
    //Pasamos todos los caracteres de la frase a minúsculas y le quitamos los espacios en blanco de adelante y atrás
    var fraseFiltrada = frase.toLowerCase().trim()
    var resultado="";

    //Recorremos la cadena generada desde 0 hasta la longitud de la cadena
    for(var i=0; i<fraseFiltrada.length; i++){
        //Vamos comprobando uno a uno los caracteres con la expresión regular para comprobar si es una vocal o no
        if (fraseFiltrada.charAt(i).match(/[aeiou]/g)){
            //Si es una vocal se añade a la variable resultado
            resultado = resultado + fraseFiltrada.charAt(i);
        }
    }

    //Y finalmente mostramos el resultado insertandolo en el html
    document.getElementById("fraseOriginal").innerHTML = frase;
    document.getElementById("respuesta3").innerHTML = "Las vocales de la cadena son: "+resultado;

}


/*Función que cuenta cada unad e las vocales que aparecen en una frase introducida por el usuario,
* para esta función tambien se ha utilizado la clase prompt que muestra un dialogo box que permite
* introducir dicha frase.*/
function contarVocales(){

    //Capturamos la frase introducida por el usuario y tranformamos la cadena a minúsculas sin espacios adelante y atrás
    var frase = prompt("Introduzca una frase");
    var fraseFiltrada = frase.toLowerCase().trim()

    //Declaramos las variables contador de cada una de las vocales que pueden aparecer en la frase y el total
    var resultadoTotal=0;
    var resultadoA=0;
    var resultadoE=0;
    var resultadoI=0;
    var resultadoO=0;
    var resultadoU=0;

    //Vamos recorriendo la cadena de caracteres desde el 0 hasta la longitud de dicha cadena
    for(var i=0; i<fraseFiltrada.length; i++){
        //recorremos cada uno de los caracteres y miramos si es una vocal con la regex usada en el ejercicio anterior
        if (fraseFiltrada.charAt(i).match(/[aeiou]/g)){
            resultadoTotal++;
            //Sumamos los contadores de la vocal encontrada
            switch(fraseFiltrada.charAt(i)) {
                case "a":
                    resultadoA++;
                    break;
                case "e":
                    resultadoE++;
                    break;
                case "i":
                    resultadoI++;
                    break;
                case "o":
                    resultadoO++;
                    break;
                case "u":
                    resultadoU++;
                    break;
                default:
            }

        }
    }

    //Finalmente pintamos el número total de vocales encontradas y el número de cada una de ellas
    document.getElementById("fraseOriginal2").innerHTML = frase;
    document.getElementById("respuesta4").innerHTML = "Total de vocales en la frase: "+resultadoTotal;
    document.getElementById("respuestaA").innerHTML = "Total de veces que aparece la 'a': "+resultadoA;
    document.getElementById("respuestaE").innerHTML = "Total de veces que aparece la 'e': "+resultadoE;
    document.getElementById("respuestaI").innerHTML = "Total de veces que aparece la 'i': "+resultadoI;
    document.getElementById("respuestaO").innerHTML = "Total de veces que aparece la 'o': "+resultadoO;
    document.getElementById("respuestaU").innerHTML = "Total de veces que aparece la 'u': "+resultadoU;
}

//***********EJERCICIOS AJAX*************

//Ejericio1
/*ENUNCIADO: Al caregar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.
* SOLUCIÓNPara ello hemos utilizado la función document ready de jquery que nos permite realizar cualquier
* acción cuando la página se carga.
* Capturamos el evento de la carga, capturamos la url actual con windows location de javascript
* o como lo he hecho en la función con el evento location de jquery.
* Finalmente introducimos el valor de la url en el valor del input con la función .val()
* de jquery.*/
$( document ).ready(function() {
    var urlActual = $(location).attr('href');
    $("#recurso").val(urlActual);


});
String.prototype.transformaCaracteresEspeciales = function() {
    return unescape(escape(this).
    replace(/%0A/g, '<br/>').
    replace(/%3C/g, '&lt;').
    replace(/%3E/g, '&gt;'));
}
var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
var tiempoInicial = 0;
function descargarContenido() {
    // Reseteamos los valores de los campos
    $("#contenidos").val("");
    $("#cabeceras").val("");
    $("#estados").val("");
    $("#codigos").val("");

    // Instanciamos el objeto XMLHttpRequest para navegadores modernos
    if(window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
    }
    else {
        //instanciamos el objeto ActiveXobject para navegadores antigüos como IE6,7,8
        peticion = new ActiveXObject("Microsoft.XMLHTTP");
    }


    peticion.onreadystatechange = mostrarContenido;

    // Realizamos la petición
    tiempoInicial = new Date();
    var recurso = $("#recurso").val();
    peticion.open('GET', recurso+'?nocache='+Math.random(), true);
    // Añadimos las cabeceras para evitar errores de CORS
    peticion.setRequestHeader("accept", "application/json");
    peticion.setRequestHeader("Content-Type", " application/javascript; charset=utf-8");
    peticion.setRequestHeader("Access-Control-Allow-Origin", "*");
    peticion.setRequestHeader("Access-control-allow-credentials", true);
    peticion.setRequestHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    peticion.setRequestHeader("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    peticion.setRequestHeader("X-Content-Type-Options", "nosniff");
    peticion.send(null);
}

//Respuesta
function mostrarContenido() {
    var tiempoFinal = new Date();
    var milisegundos = tiempoFinal - tiempoInicial;

    var estados = document.getElementById('estados');
    estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";

    if(peticion.readyState == 4) {
        if(peticion.status == 200) {
            var contenidos = document.getElementById('contenidos');
            contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
        }
        mostrarCabeceras();
        mostrarCodigoEstado();
    }
}
function mostrarCabeceras() {
    var cabeceras = document.getElementById('cabeceras');
    cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
}

function mostrarCodigoEstado() {
    var codigo = document.getElementById('codigo');
    codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
}





