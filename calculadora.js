
function display(value){
    var displayer=document.getElementById('displayer');
    if(displayer.innerHTML=="|"){
        displayer.innerHTML=value;
    }
    else{
        var content=displayer.innerHTML+value;
        displayer.innerHTML=content;
    }

    
}

function clear(){ 
    document.getElementById('displayer').innerHTML="|";
}

function del(){
    var displayer=document.getElementById('displayer');
    if((displayer.innerHTML!="|")&&(displayer.innerHTML.length>1)){
        var content=displayer.innerHTML;
        displayer.innerHTML=displayer.innerHTML.substr(0,displayer.innerHTML.length-1);
    }
    else{
        displayer.innerHTML="|";
    }
}

function equalFor2(){
    var displayer=document.getElementById('displayer').innerHTML;
    
    if(displayer.split("/")!=displayer){
        var array=displayer.split("/");
        a=parseInt(array[0]);
        b=parseInt(array[1]);
        displayer.innerHTML=div(a,b);
    }
    else if(displayer.split("*")!=displayer){
        var array=displayer.split("*");
        a=parseInt(array[0]);
        b=parseInt(array[1]);
        displayer.innerHTML=mul(a,b);
    }
    else if(displayer.split("+")!=displayer){
        var array=displayer.split("+");
        a=parseInt(array[0]);
        b=parseInt(array[1]);
        displayer.innerHTML=addition(a,b);
    }
    else if(displayer.split("-")!=displayer){
        var array=displayer.split("-");
        a=parseInt(array[0]);
        b=parseInt(array[1]);
        displayer.innerHTML=substraction(a,b);
    }
    else{
        return;

    }
    
}
function addition(a,b){document.getElementById('displayer').innerHTML=a+b;}
function substraction(a,b){document.getElementById('displayer').innerHTML=a-b;}
function mult(a,b){document.getElementById('displayer').innerHTML=a*b;}
function div(a,b){document.getElementById('displayer').innerHTML=a/b;}
function operationError(){
    display
}