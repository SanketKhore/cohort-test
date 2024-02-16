let input = document.querySelector("#input_box");
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
const arr2 = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','%'];
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        console.log(e.keyCode);
    })
})
document.addEventListener('keydown',(e)=>{
    let val= e.key;
    if(arr2.includes(val)){
        string += e.key;
        input.value = string;
    }
    else if(val=="Enter")
    {
        string = eval(string);
        input.value = string;
        string=input.value;
        e.preventDefault();
    }
    else if(val=="Backspace")
    {
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    console.log(e.key);
})


