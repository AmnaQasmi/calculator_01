#! /usr/bin/env node
// calculator through inquirer//
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter the first number : "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter the second number : "
    },
    {
        type: "list",
        name: "operator",
        message: "Enter the operator : ",
        choices: ["+", "-", "*", "/"]
    }
]);
// answer();
const { num1, num2, operator } = answer;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    if (operator === "*") {
        result = num1 * num2;
    }
    if (operator === "/") {
        result = num1 / num2;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Please enter the valid input");
}
//done//
