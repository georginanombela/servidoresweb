const { format } = require("express/lib/response");

function validar() {

    var usuario = document.getElementById("campo1").value;

    var contrasena = document.getElementById("campo2").value;

    var usuarioValido = 70;

    var contrasenaValida = 123;

    if (usuario == usuarioValido && contrasena == contrasenaValida) {

        document.getElementById("miContenedor").innerHTML = `<img src="imagenes/dentro.webp" alt="foto verde" style="width:80px;">`;

    } else {
        document.getElementById("miContenedor").innerHTML = `<img src="imagenes/fuera.jpg" style="width:350px;" alt="foto roja">`;

        //opcional. Este código limpia los caampos del form en caso de equivocarnos

        document.getElementById("campo1").value = " ";

        document.getElementById("campo2").value = " ";

    }
    if (usuario == usuarioValido && contrasena == contrasenaValida) {

        location.replace("yocorregida.html");
    }
    
}

function calcular() {

    var metros = document.getElementById("campo3").value;

    var resultado = metros*39.3701;
 
    document.getElementById("mimuestra").innerHTML = resultado;

    document.getElementById("pulgadas").value=resultado;

    if (metros>=0&&metros<=3) {document.getElementById("mifoto").innerHTML =`<img src="imagenes/mariquita.jpg">`;
        }
        if (metros>=4&&metros<=6) {document.getElementById("mifoto").innerHTML =`<img src="imagenes/olaf.jpg">`;
            }
            if (metros>=7&&metros<=10) {document.getElementById("mifoto").innerHTML =`<img src="imagenes/pato.jpg">`;
                }
}