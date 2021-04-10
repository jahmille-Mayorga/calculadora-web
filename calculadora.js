
function display(button,displayer){
    var button=document.getElementById(button);
    var displayer=document.getElementById(displayer);
    if(displayer.innerHTML=="|"){
        displayer.innerHTML=string(button.value);
    }
    else{
        var content=displayer.innerHTML+string(button.value);
        displayer.innerHTML=content;
    }

    
}

function clear(displayer){ 
    if(document.getElementById(displayer).innerHTML!="|") document.getElementById(displayer)="|";
}

function del(displayer){
    var displayer=document.getElementById(displayer);
    if(displayer.innerHTML!="|"){
        var content=displayer.innerHTML;
        displayer.innerHTML=content(1,-1);
    }
    else{
        displayer.innerHTML="|";
    }
}
