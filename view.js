  
const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')



function getTitle(){
    return chalk.blueBright(
        figlet.textSync(
            "Unit Converter",
            {
                horizontalLayout: 'default',
                verticallayout: 'default',
                font: 'Nancyj-Underlined'
            }

        )
    )
}

function getTable(list){
    const lValue = list.leftValue
    const lUnit = list.leftUnit
    const rValue = list.rightValue
    const rUnit = list.rightUnit
    return [
        {'Left Value': lValue, 'Left Unit': lUnit, "Right Value": rValue, "Right Unit": rUnit},
    ]
}

function firstInput(inp){
    const {input} = inp
    const message = "Left temperature is source(y/n)? " 
    return inquirer.prompt([
        {
            name: "input1",
            type: "input",
            message: message,
            default: input,
            validate: function(val){
                if(val === "n" || val === "y" || val === "Y" || val === "N"){
                    return true
                } else {
                    return "Please enter a valid option (s/n)"
                    
                }
            }
        }
    ])
}

function secondInput(inp){
    const {input} = inp
    const message = "Temperature value tu convert? "
    return inquirer.prompt([
        {
            name: "input2",
            type: "input",
            message: message,
            default: input,
        }
    ])
}

function thirdInput(inp){
    const {input} = inp
    const message = "From?"
    const types = ["Celsius", "Fahrenheit", "Kelvin"]
    return inquirer.prompt([
        {
            name: "input3",
            type: "list",
            message: message,
            default: input,
            choices: types
        }
    ])
}

function fourthInput(inp){
    const {input} = inp
    const message = "To?"
    const types = ["Celsius", "Fahrenheit", "Kelvin"]
    return inquirer.prompt([
        {
            name: "input4",
            type: "list",
            message: message,
            default: input,
            choices: types
        }
    ])
}



function view(list){
    return{
        title: getTitle(),
        table: getTable(list)
    }
}

module.exports = {
    
    view,
    firstInput,
    secondInput,
    thirdInput,
    fourthInput

}
