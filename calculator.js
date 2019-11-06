function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if(num==="")
        document.getElementById("output-value").innerText = num;
    else
        document.getElementById("output-value").innerText = num;
}

function getConfettiButtonOutput() {
    return document.getElementById("confetti").innerText;
}

function validLength() {
    return output.length <= 12;
}

function isFloat(n) {
    return n % 1 !== 0;
}

let number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        output = getOutput();
        if(output === "0" && !equals && run && validLength()) {
            equals = false;
            op = false;
            output = "";
            output += this.id;
            printOutput(output);
        }
        else if(equals && run && validLength()) {
            equals = false;
            op = false;
            output = "";
            output += this.id;
            printOutput(output);
        }
        else if(output !== "" && !equals && run && validLength()) {
            equals = false;
            op = false;
            output += this.id;
            printOutput(output);
        }
    });
}