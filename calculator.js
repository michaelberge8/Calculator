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

let output = "";
let equals = false;
let run = true;
let op = false;
let confetti_on = true;
let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id==="clear"){
            equals = false;
            run = true;
            op = false;
            output = "0";
            printOutput(output);
        }
        else if(this.id==="=" && output !== "" && output !== "0" && run && !equals) {
            try {
                if (isFloat(output)) {
                    equals = true;
                    run = true;
                    op = false;
                    output = Math.round((eval(output) * 100000000)) / 100000000;
                    printOutput(output);
                } else {
                    equals = true;
                    run = true;
                    op = false;
                    output = eval(output);
                    printOutput(output);
                }
                equals = true;

                //confetti
                if(confetti_on) {
                    var duration = 150;
                    var end = Date.now() + duration;
                    (function frame() {
                        //left side
                        confetti({
                            particleCount: 10,
                            angle: 60,
                            spread: 60,
                            origin: {x: 0}
                        });
//right side
                        confetti({
                            particleCount: 7,
                            angle: 120,
                            spread: 60,
                            origin: {x: 1}
                        });
                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    }());
                }
            } catch (err) {
                printOutput("error");
                alert(err);
                run = false;
            }
        }
        else if((this.id === "/" || this.id === "*" || this.id === "-" || this.id === "+" || this.id === "." || this.id === "**") && !(output === "0" || output === "") && run) {
            if(!op) {
                op = true;
                equals = false;
                output += operator[i].id;
                printOutput(output);
            }
        }
        else if(this.id === "(" && output !== "" && run) {
            if(validLength()) {
                if (output === "0") {
                    equals = false;
                    op = true;
                    output = "(";
                    printOutput(output);
                } else if (typeof (output.charAt(output.length - 1)) !== "number") {
                    equals = false;
                    op = true;
                    output += "(";
                    printOutput(output);
                }
            }
        }
        else if(this.id === ")" && output !== "" && run) {
            if(validLength()) {
                if (output === "0" || output === "") {
                    equals = false;
                    op = false;
                    output = ")";
                    printOutput(output);
                } else {
                    equals = false;
                    op = false;
                    output += ")";
                    printOutput(output);
                }
            }
        }
    });
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

let confetti_button = document.getElementById("confetti");
confetti_button.addEventListener('click', function () {
    if(getConfettiButtonOutput() === "Confetti: On") {
        confetti_on = false;
        document.getElementById("confetti").innerText = "Confetti: Off";
    }
    else {
        confetti_on = true;
        document.getElementById("confetti").innerText = "Confetti: On";
    }
});