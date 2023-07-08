console.log('Hello!');

//selectors
var button = document.querySelectorAll('button');
var screenValue = document.querySelector('.calculations')
var finalOutput = document.querySelector('.final-output')
var Num = '';
var total;

//event listener
button.forEach(element => {element.addEventListener('click', function(e) {
    // console.log(e.target.innerText);
    if(Num == ''){
        Num = e.target.innerText;
        screenValue.innerText = Num;
        total=e.target.value;
    }
    else if(Num != '' && e.target.innerText != '=' && e.target.innerText != 'C'){
        Num+=e.target.innerText;
        screenValue.innerText = Num;
        total+=e.target.value;
    }
    else if(e.target.innerText == '='){
        finalOutput.innerText = eval(total);
    }
    else if(e.target.innerText == 'C'){
        Num = '';
        screenValue.innerText = 0;
        finalOutput.innerText = 0;
    }

    
})})

// //function

function calcNumbers(result) {
    calculations.diplayResult.value+=result;
}