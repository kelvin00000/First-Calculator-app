////////////////////////////DISPLAY//////////////////////
const display = document.querySelector('.display-screen');
//////////////////////////HISTORY///////////////////////
const log = document.querySelector('.log');




//////////////////NUMERIC KEYPAD//////////////////////
document.querySelector('.one').addEventListener('click', () => {
    display.innerHTML+= 1;
    
    if(newLog.operator === ''){
        newLog.initial += '1';
    }else{
        newLog.current += '1';
    }
})
document.querySelector('.two').addEventListener('click', () => {
    display.innerHTML+= 2;
    if(newLog.operator === ''){
        newLog.initial += '2';
    }else{
        newLog.current += '2';
    }
});
document.querySelector('.three').addEventListener('click', () => {
    display.innerHTML+= 3;

    if(newLog.operator === ''){
        newLog.initial += '3';
    }else{
        newLog.current += '3';
    }
});
document.querySelector('.four').addEventListener('click', () => {
    display.innerHTML+= 4;

    if(newLog.operator === ''){
        newLog.initial += '4';
    }else{
        newLog.current += '4';
    }
});
document.querySelector('.five').addEventListener('click', () => {
    display.innerHTML+= 5;

    if(newLog.operator === ''){
        newLog.initial += '5';
    }else{
        newLog.current += '5';
    }
});
document.querySelector('.six').addEventListener('click', () => {
    display.innerHTML+= 6;

    if(newLog.operator === ''){
        newLog.initial += '6';
    }else{
        newLog.current += '6';
    }
});
document.querySelector('.seven').addEventListener('click', () => {
    display.innerHTML+= 7;

    if(newLog.operator === ''){
        newLog.initial += '7';
    }else{
        newLog.current += '7';
    }
});
document.querySelector('.eight').addEventListener('click', () => {
    display.innerHTML+= 8;

    if(newLog.operator === ''){
        newLog.initial += '8';
    }else{
        newLog.current += '8';
    }
});
document.querySelector('.nine').addEventListener('click', () => {
    display.innerHTML+= 9;

    if(newLog.operator === ''){
        newLog.initial += '9';
    }else{
        newLog.current += '9';
    }
});
document.querySelector('.zero').addEventListener('click', () => {
    display.innerHTML+= 0;

    if(newLog.operator === ''){
        newLog.initial += '0';
    }else{
        newLog.current += '0';
    }
});
document.querySelector('.point').addEventListener('click', () => {
    display.innerHTML+= '.';

    if(newLog.operator === ''){
        newLog.initial += '.';
    }else{
        newLog.current += '.';
    }
});



/////////////////////TRIG FUNCTIONS//////////////////////////////
//let functionResult;
//result = functionResult;

document.querySelector('.Sin').addEventListener('click', () => {
    //display.innerHTML+= 'Sin(';
    window.alert('this function does not work yet');
    //newLog.operator = 'sin'
});
document.querySelector('.Cos').addEventListener('click', () => {
    //display.innerHTML+= 'Cos(';
    window.alert('this function does not work yet');
    //newLog.operator = 'cos'
});
document.querySelector('.Tan').addEventListener('click', () => {
    //display.innerHTML+= 'Tan(';
    window.alert('this function does not work yet');
    //newLog.operator = 'tan'
});


///////////////////CLEAR SCREEN BUTTONS//////////////////////////
document.querySelector('.clean').addEventListener('click', () => {
    let keys = Object.keys(newLog);
    let lastKey = keys[keys.length - 1];
    delete lastKey;

    console.log('working');
});
document.querySelector('.clear-screen').addEventListener('click', () => {
    display.innerHTML= '';
    newLog.initial = 0;
    newLog.operator = '';
    newLog.current = 0;
});



///////////////////////////////ARITHMETIC OPERATORS///////////////////////////
document.querySelector('.add').addEventListener('click', () => {
    display.innerHTML = '+';
    newLog.operator = '+'
    console.log(newLog.operator);
});
document.querySelector('.minus').addEventListener('click', () => {
    display.innerHTML+= '-';
     newLog.operator = '-'
});
document.querySelector('.multiply').addEventListener('click', () => {
    display.innerHTML+= `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
     newLog.operator = '*'
});
document.querySelector('.divide').addEventListener('click', () => {
    display.innerHTML+= `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    width="13px" height="13px" viewBox="0 0 20.908 20.908"
                    xml:space="preserve">
               <g>
                   <path d="M4.664,0.67l16.244,16.245l-3.629,3.629L1.034,4.3L4.664,0.67z M16.825,8.354c2.254,0,4.082-1.827,4.082-4.082
                       c0-2.254-1.828-4.082-4.082-4.082c-2.255,0-4.082,1.828-4.082,4.082C12.743,6.527,14.57,8.354,16.825,8.354z M4.082,12.554
                       C1.828,12.554,0,14.38,0,16.636c0,2.254,1.828,4.082,4.082,4.082s4.082-1.828,4.082-4.082C8.164,14.38,6.336,12.554,4.082,12.554z"
                       />
               </g>
               </svg>`;
     newLog.operator = '/'
});
document.querySelector('.percent').addEventListener('click', () => {
    display.innerHTML+= '%';
     newLog.operator = '%'
});
document.querySelector('.exponent').addEventListener('click', () => {
    display.innerHTML+= '^';
     newLog.operator = '^'
});
document.querySelector('.root').addEventListener('click', () => {
    display.innerHTML+= `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" id="square-root" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M3,12H4.31a1,1,0,0,1,.93.65L8,20,10.85,4.82a1,1,0,0,1,1-.82H21" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`;
     newLog.operator = 'sqrt'
});







//////////////////////////////////COMPUTATION////////////////////////////////////////
let newLog = {
    initial: 0, operator: '', current: 0
}

document.querySelector('.equals').addEventListener('click', () => {
    computation();
    addToHistory();
});

let result = 0;
function computation(){

    if(newLog.operator == '+'){
        result = parseInt(newLog.initial) + parseInt(newLog.current);
    }
    else if(newLog.operator == '-'){
        result = parseInt(newLog.initial) - parseInt(newLog.current);
    }
    else if(newLog.operator == '*'){
        result = parseInt(newLog.initial) * parseInt(newLog.current);
    }
    else if(newLog.operator == '/'){
        result = parseInt(newLog.initial) / parseInt(newLog.current);
    }
    else if(newLog.operator == '^'){
        findSquare();
        result = squaredNumber;
    }
    else if(newLog.operator == '%'){
        result = parseInt(newLog.initial) / 100;
    }
    else if(newLog.operator == 'sqrt'){
        findRoot();
        result = rootNumber;
    }
    /////////trig////////////
    /*
    else if(newLog.operator == 'sin'){
        findTrigValue();
        result = trigValue;
    }
    else if(newLog.operator == 'cos'){
        findTrigValue();
        result = trigValue;
    }
    else if(newLog.operator == 'tan'){
        findTrigValue();
        result = trigValue;
    }
    */

    display.innerHTML = result;
};

/////////////ROOT///////////////
let rootNumber;
function findRoot(){
    const number = parseInt(newLog.current);
        if(number < 0){
            rootNumber = 'NaN';
        }
        else{
            rootNumber = Math.sqrt(number);
        }
}

/////////////EXPONENT/////////////
let squaredNumber;
function findSquare(){
    const initialNumber = parseInt(newLog.initial);
    const currentNumber = parseInt(newLog.current);

        if(initialNumber < 0){
            squaredNumber = 'NaN';
        }
        else{
            squaredNumber = Math.pow(initialNumber, currentNumber);
        }
}

///////////TRIG/////////////////
let trigValue;
/*
function findTrigValue(){
    const Number = parseInt(newLog.current);

    if(newLog.operator == 'sin'){

    }
    else if(newLog.operator == 'cos'){

    }
    else if(newLog.operator == 'tan'){

    }

}
*/








//////////////////////////////////////////////////HISTORY/////////////////////////////////////////////////
let historyLog = JSON.parse(localStorage.getItem('historyLog')) || [];

function addToHistory(){
    historyLog.push({
        initial: newLog.initial,
        operator: newLog.operator,
        current: newLog.current,
        result: result
    });

    localStorage.setItem('historyLog', JSON.stringify(historyLog));
}
historyLog.forEach(newLog => {
    const newEntry = document.createElement('div');
    newEntry.classList.add('newLog');
    newEntry.innerHTML = `${parseInt(newLog.initial)} ${newLog.operator} ${parseInt(newLog.current)} = ${newLog.result}</br>`
    log.innerHTML += newEntry.innerHTML;
});


////////HISTORY LOG TOGGLE/////////////
document.getElementById('open-btn').addEventListener('click', ()=>{
    document.querySelector('.container').classList.toggle('container-toggle');
    document.getElementById('open-btn').classList.toggle('clicked');
});

/*
document.body.addEventListener('click', ()=>{
    document.querySelector('.container').classList.remove('container-toggle');
})
*/
