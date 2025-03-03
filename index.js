const displaySection = document.getElementById('displaySection');

const clearBtn = document.getElementById('clearBtn');
const percentBtn = document.getElementById('percentBtn');
const divBtn = document.getElementById('divBtn');

const sevBtn = document.getElementById('sevBtn');
const eightBtn = document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn');
const mulBtn = document.getElementById('mulBtn');

const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn = document.getElementById('sixBtn');
const subBtn = document.getElementById('subBtn');

const oneBtn = document.getElementById('oneBtn');
const twoBtn = document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const plusBtn = document.getElementById('plusBtn');

const zeroBtn = document.getElementById('zeroBtn');
const decBtn = document.getElementById('decBtn');
const equalBtn = document.getElementById('equalBtn');

display = "";

clearBtn.onclick = function(){
    display = "---";
    displaySection.textContent = display;
}
percentBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display = Number(display) / 100;
        displaySection.textContent = display;
    }
    else{
        display = Number(display) / 100;
        displaySection.textContent = display;
    }
}
divBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "/";
        displaySection.textContent = display;
    }
    else{
        display += "/";
        displaySection.textContent = display;
    }
}
sevBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "7";
        displaySection.textContent = display;
    }
    else{
        display += "7";
        displaySection.textContent = display;
    }
}
eightBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "8";
        displaySection.textContent = display;
    }
    else{
        display += "8";
        displaySection.textContent = display;
    }
}
nineBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "9";
        displaySection.textContent = display;
    }
    else{
        display += "9";
        displaySection.textContent = display;
    }
}
mulBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "*";
        displaySection.textContent = display;
    }
    else{
        display += "*";
        displaySection.textContent = display;
    }
}
fourBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "4";
        displaySection.textContent = display;
    }
    else{
        display += "4";
        displaySection.textContent = display;
    }
}
fiveBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "5";
        displaySection.textContent = display;
    }
    else{
        display += "5";
        displaySection.textContent = display;
    }
}
sixBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "6";
        displaySection.textContent = display;
    }
    else{
        display += "6";
        displaySection.textContent = display;
    }
}
subBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "-";
        displaySection.textContent = display;
    }
    else{
        display += "-";
        displaySection.textContent = display;
    }
}
oneBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "1";
        displaySection.textContent = display;
    }
    else{
        display += "1";
        displaySection.textContent = display;
    }
}
twoBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "2";
        displaySection.textContent = display;
    }
    else{
        display += "2";
        displaySection.textContent = display;
    }
}
threeBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "3";
        displaySection.textContent = display;
    }
    else{
        display += "3";
        displaySection.textContent = display;
    }
}
plusBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "+";
        displaySection.textContent = display;
    }
    else{
        display += "+";
        displaySection.textContent = display;
    }
}
zeroBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += "0";
        displaySection.textContent = display;
    }
    else{
        display += "0";
        displaySection.textContent = display;
    }
}
decBtn.onclick = function(){
    if (display == "---"){
        display = "";
        display += ".";
        displaySection.textContent = display;
    }
    else{
        display += ".";
        displaySection.textContent = display;
    }
}
equalBtn.onclick = function(){
    if (display == "---"){
        displaySection.textContent = display;
    }
    else{
        let evalNum = eval(display);
        if (typeof evalNum === "number" && !Number.isInteger(evalNum)){
            display = evalNum.toFixed(3);
            displaySection.textContent = display
        }
        else{
            display = evalNum
            displaySection.textContent = display;
        }
    }
}
