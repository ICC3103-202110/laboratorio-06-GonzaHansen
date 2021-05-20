const {firstInput, secondInput, thirdInput, fourthInput } = require('./view')
const {update} = require('./update')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const input1 = await firstInput(model)
        const input2 = await secondInput(model)
        const input3 = await thirdInput(model)
        const input4 = await fourthInput(model)
            
        const updatedModel = update(input1["input1"],input2["input2"], input3["input3"], input4["input4"], model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
            }
        }        
    }


module.exports = {
    app
}