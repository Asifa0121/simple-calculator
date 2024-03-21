#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumnber"},
    {message: "Select one of the operators to perofrm Opeartion", 
    type: "list",
    name: "operator",
 choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
])
//condiltional statment
if (answer.operator === "Addition"){
    console.log(answer.firstNumber+ answer.secondNumnber);
    } else if (answer.operator === "Subtraction"){
        console.log(answer.firstNumber - answer.secondNumnber);
    } else if (answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumnber);
    } 
   else if (answer.operator === "Division"){
        console.log(answer.firstNumber/ answer.secondNumnber);
    }
      
    else {
        console.log("Please select Valid Operator");
    }
    