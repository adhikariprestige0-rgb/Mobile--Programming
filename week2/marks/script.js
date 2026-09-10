function result() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);
    let m6 = Number(document.getElementById("m6").value);
    let m7 = Number(document.getElementById("m7").value);
    let m8 = Number(document.getElementById("m8").value);

    let total = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;

    let output = document.getElementById("output");

    if (total > 600) {
        output.innerHTML = "Total Marks: " + total + "<br>Distinction";
        output.style.color = "green";
    }
    else if (total >= 500) {
        output.innerHTML = "Total Marks: " + total + "<br>First Division";
        output.style.color = "green";
    }
    else if (total >= 400) {
        output.innerHTML = "Total Marks: " + total + "<br>Second Division";
        output.style.color = "green";
    }
    else if (total >= 300) {
        output.innerHTML = "Total Marks: " + total + "<br>Third Division";
        output.style.color = "green";
    }
    else {
        output.innerHTML = "Total Marks: " + total + "<br>Fail";
        output.style.color = "red";
    }
}