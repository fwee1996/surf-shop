/*Book 1 column 2-Chapter5:Lost at Sea/AveragePrices*/
//Find average price of entire inventory
// $137.49 expected output

/*original code:
const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "gear" },
    { id: 5, description: "Surf wax", price: 9.99, type: "gear" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "gear" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "gear" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "gear" }
]
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

const isSurfbaord = (item) => {
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

const calculateAveragePrice = (products) => {
    const allPrices = products.price
    const averagePrice = allPrices / products.length

    return averagePrice
}

for (let surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }


    if (isSurfbaord(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (message !== "") {
        console.log(message)
    }
}

console.log("\n------------------------\n")


for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}

console.log("\n------------------------\n")

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)

*/

////original code ends///////





//////Modified code:*/////////
//inventory imported back bcs it was cut and paste into data.js:

/*const { inventory } = require("./data.js")

//My Answer for Average Price:
let allPrices=0;

for (const item of inventory) {
    //console.log(item.price)
    allPrices += item.price
    //console.log(allPrices)
    }

//console.log(allPrices)//

/*let averagePrice = allPrices / inventory.length
console.log(averagePrice)
/*


//output: 137.49

*/







//Entire averagePrice.js code because of Modules Exercise : Function import/export:
/*
const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "gear" },
    { id: 5, description: "Surf wax", price: 9.99, type: "gear" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "gear" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "gear" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "gear" }
]*/

//inventory imported back bcs it was cut and paste into data.js:

const { inventory } = require("./data.js")

const { isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice } = require("./function.js") 


    //Below functions have been moved to function.js
/*  
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
    
       let allPrices=0
         const calculateAveragePrice = () => {
    
                for (const products of inventory) {
                 allPrices += products.price}
    
                 const averagePrice = allPrices / inventory.length
    
        return averagePrice
    }
*/

for (let surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }


    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (message !== "") {
        console.log(message)
    }
}

console.log("\n------------------------\n")

//call fn that converts to uppercase
for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}

console.log("\n------------------------\n")

//call fn that calc average price
const averagePrice = calculateAveragePrice(inventory)
console.log(averagePrice)


