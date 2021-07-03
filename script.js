let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText =e.target.innerText;
        console.log('button text is', buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == 'DEL'){
            screen.value = screenValue.slice(0,-1);
            screenValue=screen.value;
            /*screen.value=screenValue;*/
        }
        else if (buttonText == '=') {
           screen.value = eval(screenValue); 
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

function cal_sin(){
    /*var text=document.form.textinput.value*/
   screen.value=Math.sin(screen.value);
}

function cal_cos(){
    screen.value=Math.cos(screen.value);
}

function cal_tan(){
   screen.value=Math.tan(screen.value);
}