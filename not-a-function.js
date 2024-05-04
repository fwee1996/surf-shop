/*Book 1 column 2-Chapter4:Sequina's Accounting--UpperCase Method*/
/*testing .toUpperCase() method:
let text = "Hello World!";
let result = text.toUpperCase();
console.log(result)*/


/*original not-a-function.js file:

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
    const upperDescription = product.toUpperCase()
    const upperPrice = price.toUpperCase()
    const upperType = type.toUpperCase()
    return allUpperCase
}

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

const modifiedData = convertDataForAccounting(inventory)
console.log(modifiedData)

*/ 



/*original file ends here---answer is below*/



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


//My answer (Part that I change):


const convertDataForAccounting = (product) => {
    let upperDescription = product.description.toUpperCase()
    let upperType = product.type.toUpperCase()
    let price = product.price
    return `${upperDescription} - ${upperType} - ${price}`
}

for (const item of inventory) {
    const modifiedData = convertDataForAccounting(item)
    console.log(modifiedData)
}

//output:
/*9 ft longboard surfboard is a surfboard
5 ft shortboard surfboard is a surfboard
Full wetsuit with hood and boots is a clothing product
Surfboard leash is currently on sale
Surf wax is currently on sale
Surfboard fins is currently on sale
Rashguard shirt is currently on sale
Surfboard rack for car is a surfing gear product
Beach towel is currently on sale
Surfboard repair kit is currently on sale

------------------------

9 FT LONGBOARD SURFBOARD - SURFBOARD - 499.99
5 FT SHORTBOARD SURFBOARD - SURFBOARD - 399.99
FULL WETSUIT WITH HOOD AND BOOTS - CLOTHING - 199.99
SURFBOARD LEASH - GEAR - 29.99
SURF WAX - GEAR - 9.99
SURFBOARD FINS - GEAR - 39.99
RASHGUARD SHIRT - CLOTHING - 49.99
SURFBOARD RACK FOR CAR - GEAR - 99.99
BEACH TOWEL - CLOTHING - 24.99
SURFBOARD REPAIR KIT - GEAR - 19.99
*/

//LJ's answer:
/*const convertDataForAccounting = () => {
    for (const surfProduct of inventory) {
      const descriptionUpper = surfProduct.description.toUpperCase();
      const typeUpper = surfProduct.type.toUpperCase();
      console.log(`${descriptionUpper} - ${typeUpper} - ${surfProduct.price}`);
    }
  };
  console.log("\n------------------------\n");
  const modifiedData = convertDataForAccounting();
  console.log(modifiedData);*/


/*Ideal Answer:
  const convertDataForAccounting = (product) => {
    const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
    return allUpperCase
}


for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}
*/