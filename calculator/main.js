
let calculator = document.getElementById('calculator');
let dial = document.querySelector('.numberField'); 
let SecretDial = document.querySelector('.numberFieldSecond')
console.log(calculator);

let operator = '';
let opernand = '';
let secondOpernand = '';

calculator.onclick = function(event) {
    console.log(event);
  
    
    switch (event.target.innerText) {
        case "AC":
            console.log("AC");
            dial.value = "";
            operator = '';
            opernand = '';
            secondOpernand = '';
            SecretDial.value = ''
            break;

        case "=": 
        dial.value = eval(dial.value);
        opernand = eval(dial.value);
        SecretDial.value = '';

            console.log("=");
            break;

        case undefined:
            break;

            case '/\n1\n2\n3\n*\n4\n5\n6\n+\n7\n8\n9\n-\n0\nAC\n=':
                console.log(operator);
                console.log(opernand);
                console.log(secondOpernand);
            break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (operator === '') {
                opernand += event.target.innerText;
                dial.value += event.target.innerText;
            } else {
                secondOpernand = event.target.innerText;
                dial.value += event.target.innerText;
                opernand = eval(dial.value);
                SecretDial.value = eval(dial.value);
                secondOpernand = '';
            }
            break;
            
        case '/':
        case '*':
        case '+':
        case '-':
            operator = event.target.innerText;
            dial.value += event.target.innerText;

            break;

        // default:
        //     dial.value += event.target.innerText;
    }
};

calculator.onkeydown = function (event){
    let key = event.key;
    if (/^\d$/.test(key) ) {
        if (operator === '') {
            opernand += key
            dial.value = opernand;
        }  else {
            secondOpernand += key;
            dial.value += secondOpernand;
            opernand = eval(dial.value);
            SecretDial.value = eval(dial.value);
            secondOpernand = '';
        }
      } else if (/^[+\-*/]$/.test(key)){
        console.log('1')
        operator = key;
        dial.value += operator;
    } else if (/^[=]$/.test(key) || event.keyCode === 13) {
        dial.value = eval(dial.value);
        opernand = eval(dial.value);
        SecretDial.value = '';

    }
    
}

dial.focus();
