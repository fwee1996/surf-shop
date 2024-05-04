/*Book 1 column 2-Chapter7:Just a Function/Function Modules
move all of your functions into a separate module, export them, 
and then import them back into the averagePrice.js module
*/
const isBargain = (inventoryItem) => {
    let returnValue = false

    if (inventoryItem.price < 50.00) {
        returnValue = true
    }

    return returnValue
}

const isClothing = (item) => {
    let returnValue = false

    if (item.type === "clothing") {
        returnValue = true
    }

    return returnValue
}

const isSurfboard = (item) => {
    let returnValue = false

    if (item.type === "surfboard") {
        returnValue = true
    }

    return returnValue
}

const isGear = (gear) => {
    let returnValue = false

    if (gear.type === "gear") {
        returnValue = true
    }

    return returnValue
}

const convertDataForAccounting = (product) => {
    const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
    return allUpperCase
}



//////// Define Average price Function: ///////////
     const calculateAveragePrice = (inventory) => {
        let allPrices=0
            for (const product of inventory) {
            allPrices += product.price}

            const averagePrice = allPrices / inventory.length

            return averagePrice
            }


/*You can only export one thing from a module, 
yet you want to export 6 things. 
Add each function as a key on an object:
*/
module.exports = {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
}