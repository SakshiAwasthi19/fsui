const display=document.getElementById('display');
function append(value){
    display.value+=value;
}

function clearDisplay(){
    display.value='';
}

function del(){
    display.value=display.value.slice(0,-1);
}

function calculateFunc(func){
    let val=parseFloat(display.value);
    switch(func){
        case 'sin':
            display.value=Math.sin(toRad(val)).toFixed(5);
            break; 
        case 'cos':
            display.value=Math.cos(toRad(val)).toFixed(5);
            break; 
        case 'tan':
            display.value=Math.tan(toRad(val)).toFixed(5);
            break; 
        case 'log':
            display.value=Math.log10(val).toFixed(5);
            break; 
        case 'sqr':
            display.value=Math.pow(val,2);
            break; 
        case 'cub':
            display.value=Math.pow(val,3);
            break; 
        case 'sqrt':
            display.value=Math.pow(val,1/2)
            break; 
        case 'cbrt':
            display.value=Math.pow(val,1/3);
            break;     
    }
}

function toRad(deg){
    return deg*(Math.PI/180);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value='error';
    }
}