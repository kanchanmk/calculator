"use script";

const inputBtns = document.querySelector(".inputBtns");
const display = document.querySelector(".display");
const operations = ["+", "-", "*", "/"];
let firstNumber = 0;
let secondNumber = 0;
let input = "";
let operation = "";
let operationBtn;
inputBtns.addEventListener("click", (e) => {
	if (e.target.classList.contains("input")) {
		input = e.target.getAttribute("data-input");

		console.log(`display.value ${display.value}`);
		if (input === "C") {
			display.value = "";
			firstNumber = 0;
			secondNumber = 0;
			operation = "";
			input = "";
		} else if (operations.indexOf(input) != -1) {
			operationBtn = e.target;
			operationBtn.classList.toggle("selected");
			//operationBtn.style.backgroundColor = "lightgreen";
			console.log(`input: ${input}`);
			operation = input;
			if (display.value != "") {
				firstNumber = Number(display.value);
				display.value = "";
			}
		} else if (input === "=") {
			operationBtn.classList.toggle("selected");
			console.log(" => ");
			secondNumber = Number(display.value);
			console.log(
				`operation : ${operation} firstNumber : ${firstNumber} secondNumber ${secondNumber}`
			);
			let answer = getAnswer(firstNumber, secondNumber, operation);
			console.log(`answer ${answer}`);
			display.value = `${firstNumber} ${operation} ${secondNumber} = ${answer}`;
		} else {
			display.value += input;
		}
	}
});

let getAnswer = (num1, num2, operation) => {
	switch (operation) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return num1 / num2;
	}
};
