let num1 = 0;
let num2 = 0;
let ok = 0;
let nk = 0;
let correctAns = 0;
function newRiddle() {
    num1 = Math.round(Math.random()*10);
    num2 = Math.round(Math.random()*10);
    document.getElementById("1").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
}
newRiddle();
function checkAnswer() {
    var ans = document.querySelector(".input").value;
    if (ans == correctAns) {
        console.log("Correct answer");
        ok += 1;
        console.log(num1 + " times " + num2 + " equals " + (num1*num2));
        newRiddle();
    }
    else {
        nk += 1;
        console.log("Wrong answer");
        newRiddle();
    }
    document.getElementById("2").innerHTML = "K/D = " + (ok/nk);
    document.getElementById("3").innerHTML = "Correct answers = " + ok;
    document.getElementById("3").innerHTML = "Wrong answers = " + nk;
}