let result = 0;
const resDisplay = document.getElementById("result");
const opDisplay = document.getElementById("dis-op");
const historyDisplay = document.getElementById("history");
console.log(historyDisplay);
let dotFlag = true;
let saver = [];

const setResult = () => {
  if (dotFlag && event.target.innerHTML === ".") {
    resDisplay.innerHTML += event.target.innerHTML;
    dotFlag = false;
  } else if (event.target.innerHTML === ".") {
  } else {
    resDisplay.innerHTML = Number(
      resDisplay.innerHTML + event.target.innerHTML
    );
  }
};

const setClr = () => {
  resDisplay.innerHTML = "0";
};

const setOp = () => {
  opDisplay.innerHTML = event.target.innerHTML;
  result = Number(resDisplay.innerHTML);
  dotFlag = true;
  resDisplay.innerHTML = "";
};

const setTotal = () => {
  resDisplay.innerHTML = String(
    calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML)
  );
  dotFlag = true;
  opDisplay.innerHTML = "";
  result = 0;
};

const calc = (a, b, op) => {
  let res;
  switch (op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b === 0 ? "Error" : a / b;
      break;
    default:
      res = b;
  }
  historyDisplay.innerHTML += `${a} ${op} ${b} = ${res},`
  return res;
};
