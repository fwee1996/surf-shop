/*Book1-Column2-Chapter 2: Underwater Undefined-Debugger Exercise to get desired output
*/
const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "surfboard" },
    { id: 5, description: "Surf wax", price: 9.99, type: "surfboard" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "surfboard" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "surfboard" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "surfboard" }
]
//make sure to look at variables tab on debug to see inventoryItem.price
/*const isBargain = (inventoryItem) => {
    if (inventoryItem.price < 50.00) {
        return true
    }

    return false
}
*/



const isBargain = (surfProduct) => {
    if (surfProduct.price < 50.00) {
        return true
    }

    return false
}

//make sure to look at variables tab on debug to see item.type
/*const isClothing = (item) => {
    if (item.type === "clothing") {
        return true
    }

    return false
}
*/

const isClothing = (surfProduct) => {
    if (surfProduct.type === "clothing") {
        return true
    }

    return false
}

//make sure to look at variables tab on debug to see gear.type
/*const isGear = (gear) => {
    if (gear.type === "surfboard") {
        return true
    }

    return false
}
*/

const isGear = (surfProduct) => {
    if (surfProduct.type === "surfboard") {
        return true
    }

    return false
}

for (const surfProduct of inventory) {
    console.log(surfProduct.description)

    if (isBargain(surfProduct)) {
        console.log("\t* Is currently on sale")
    }
    if (isClothing(surfProduct)) {
        console.log("\t* Is a clothing product")
    }
    if (isGear(surfProduct)) {
        console.log("\t* Is a surfing gear product")
    }
}



/*output:
9 ft longboard surfboard
	* Is a surfing gear product
5 ft shortboard surfboard
	* Is a surfing gear product
Full wetsuit with hood and boots
	* Is a clothing product
Surfboard leash
	* Is currently on sale
	* Is a surfing gear product
Surf wax
	* Is currently on sale
	* Is a surfing gear product
Surfboard fins
	* Is currently on sale
	* Is a surfing gear product
Rashguard shirt
	* Is currently on sale
	* Is a clothing product
Surfboard rack for car
	* Is a surfing gear product
Beach towel
	* Is currently on sale
	* Is a clothing product
Surfboard repair kit
	* Is currently on sale
	* Is a surfing gear product */










