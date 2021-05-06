function obtenerHistorial() {
    return document.getElementById("historial-valor").innerText;
}
function imprimirHistorial(num) {
    document.getElementById("historial-valor").innerText=num;
}
function obtenerSalida() {
    return document.getElementById("salida-valor").innerText;
}
function imprimirSalida(num) {
    if(num==""){
        document.getElementById("salida-valor").innerText=num;
    }
    else {
        document.getElementById("salida-valor").innerText=obtenerFormatoNumero(num);
    }
}
function obtenerFormatoNumero (num) {
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function formatoNumeroInverso (num) {
    return Number(num.replace(/,/g,''));
}
var operador = document.getElementsByClassName("operador");
for(var i =0;i<operador.length;i++){
    operador[i].addEventListener('click', function() {
        if(this.id=="limpiarTodo"){
            imprimirHistorial("");
            imprimirSalida("");
        }
        if(this.id=="borrar"){
            var salida=formatoNumeroInverso(obtenerSalida()).toString();
            if(salida){
                salida = salida.substr(0,salida.length-1);
                imprimirSalida(salida);
            }
        }
        else {
            var salida = obtenerSalida();
            var historial = obtenerHistorial();
            if(salida==""&&historial!=""){
                if(isNaN(historial[historial.length-1])){
                    historial = historial.substr(0,historial.length-1);
                }
            }
            if(salida!="" || historial!=""){
                // condicion de verdadero o falso 
                salida= salida=""?salida:formatoNumeroInverso(salida);
                historial = historial+salida;
                if(this.id=="="){
                    var resultado=eval(historial);
                    imprimirSalida(resultado);
                    imprimirHistorial("");
                }
                else {
                    historial = historial + this.id;
                    imprimirHistorial(historial);
                    imprimirSalida("");
                }
            }
        }

    });
}
var numero = document.getElementsByClassName("numero");
for(var i =0;i<numero.length;i++){
    numero[i].addEventListener('click', function() {
        var salida=formatoNumeroInverso(obtenerSalida());
        if(salida!=NaN){
            salida=salida+this.id;
            imprimirSalida(salida); 
        }
    })
}