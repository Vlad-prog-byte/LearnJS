
let a ='';//first nuber
let b ='';// second number
let sign = '';//sign of  operations
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/'];

//экран
const out = document.querySelector('.calculator-screen p');


function cleerAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector('.ac').onclick = cleerAll;


document.querySelector('.buttons').onclick = ( event) => {
    if (! event.target.classList.contains('button')) return;
    if ( event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key =  event.target.textContent;
    if (key === "+/-")
    {
        alert("Не работает");
        return;
    }
    if (digit.includes(key)){
        if (a !== '' && sign !== '')
        {
            b += key;
            b = Number(b).toString();
            console.log(a, b, sign);
            out.textContent = b;
        }
        else
        {
            a += key;
            a = Number(a).toString();
            console.log(a, b, sign);
            out.textContent = Number(a);
        }
        return;
    }
    if (action.includes(key)){
        sign = key;
        finish = true;/////
        console.log(a, b, sign);
        out.textContent = key;
        return;
    }
    if (key == '%' && a != '' && b === ''){
        out.textContent = Number(a) / 100;
        a = String(out.textContent);
        sign = '';
        b = '';
        finish = false;
    }
    if (key == '='){
        if (b == '' || !finish){
            sign = '';
            out.textContent = a;
        }
        else{
            switch(sign){
                case '+':
                    out.textContent = Number(a) + Number(b);
                    a = String(out.textContent);
                    sign = '';
                    b = '';
                    finish = false;
                    break;
                case '-':
                    out.textContent = Number(a) - Number(b);
                    a = String(out.textContent);
                    sign = '';
                    b = '';
                    finish = false;
                    break;
                case '*':
                    out.textContent = Number(a) * Number(b);
                    a = String(out.textContent);
                    sign = '';
                    b = '';
                    finish = false;
                    break;
                case '/':
                    if (b == 0){
                        out.textContent = '';
                        a = '';
                        b = '';
                        sign = '';
                        finish = false;
                        alert('Infinity');
                    }
                    else
                    out.textContent = parseFloat((Number(a) / Number(b)).toFixed(7));
                    a = String(out.textContent);
                    b = '';
                    sign = '';
                    finish = false;
                    break;
            }
        }
    }

}