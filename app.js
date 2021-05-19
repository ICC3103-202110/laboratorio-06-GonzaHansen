const {firstInput, secondInput, thirdInput, fourthInput } = require('./view')
const {updateLeft,updateRight} = require('./update')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const input1 = await firstInput(model)
        if(input1["input1"] === "S" || input1["input1"] === "s"){
            const input2 = await secondInput(model)
            const input3 = await thirdInput(model)
            const input4 = await fourthInput(model)
            const updatedModel = updateLeft(input2["input2"], input3["input3"], input4["input4"], model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
             }
        }
        else{
            const input2 = await secondInput(model)
            const input3 = await thirdInput(model)
            const input4 = await fourthInput(model)
            const updatedModel = updateRight(input2["input2"], input3["input3"], input4["input4"], model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
             }
        }
    }
}

module.exports = {
    app
}