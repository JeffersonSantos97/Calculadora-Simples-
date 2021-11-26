let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");

let r = document.querySelector("#result");


function addition() {

    r.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
}

function subtraction() {
    r.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
}
function multiplication() {
    r.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}
function division() {
    let N1 = parseFloat(n1.value);
    let N2 = parseFloat(n2.value);
    if (N2 === 0) {
        r.innerHTML = "Impossível dividir com 0"
    }
    else {
        r.innerHTML = N1 / N2;
    }

}
