function calc(op) {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  document.getElementById("result").innerText =
    "Result: " + (op == "+" ? a+b : op == "-" ? a-b : a*b);
}