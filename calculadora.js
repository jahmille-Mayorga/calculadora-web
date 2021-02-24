var currentNumber=ele

var plusCalc=function plusCalc2(number1,number2){
    var number1=parseInt(document.getElementById("number").value);
    var number2=parseInt(document.getElementById("number").value);
    return number1+number2;
}
var minusCalc=function minusCalc2(number1,number2){
    var number1=parseInt(document.getElementById("number").value);
    var number2=parseInt(document.getElementsById("number").value);
    return number1-number2;
}
var multiCalc=function multiCalc(number1,number2){
    var number1=parseInt(document.getElementById("number").value);
    var number2=parseInt(document.getElementById("number").value);
    return number1*number2;
}
var division=function diviCalc(number1,number2){
    var number1=parseInt(document.getElementById("number").value);
    var number2=parseInt(document.getElementById("number").value);
    return number1/number2;
}
/*Los inputs deben ser evaluados como ints antes de aplicar las anteriores funciones, las 
siguientes funciones seran para numeros decimales, aunque en la proxima version voy a reducir
el codigo(hacer una funcion que evalue castear las variables a int o float para reducir 
el codigo escrito)
*/
var plusDecimal=function plusDecimal2(number1,number2){
    var number1=parseFloat(document.getElementById("number").value);
    var number2=parseFloat(document.getElementById("number").value);
    return number1+number2;
}
var minusDecimal=function minusDecimal2(number1,number2){
    var number1=parseFloat(document.getElementById("number").value);
    var number2=parseFloat(document.getElementsById("number").value);
    return number1-number2;
}
var multiDecimal=function multiDecimal(number1,number2){
    var number1=parseFloat(document.getElementById("number").value);
    var number2=parseFloat(document.getElementById("number").value);
    return number1*number2;
}
var divisionDecimal=function divisionDecimal(number1,number2){
    var number1=parseFloat(document.getElementById("number").value);
    var number2=parseFloat(document.getElementById("number").value);
    return number1/number2;
}


/*Se me ocurrio una funcionalidad que saque todos los multiplos, guardandolos en un arreglo
y luego recorriendo el arreglo para desplegarlos(separados por coma), creo que ese es el mas facil
. Eso en base a la factorizacion.

Se me ocurrio una funcionalidad capaz de desplegar todos los numeros primos de x a y numero(un rango)
.Tales numeros pueden ser desplegados mediante un arreglo y separados por coma.

Se me ocurrio una funcionalidad capaz de desplegar todos los numeros pares de x a y numero(un rango)
Tales numeros pueden ser desplegados mediante un arreglo y separados por coma.
*/
