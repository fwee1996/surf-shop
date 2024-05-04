//Book1-Column2-chapter 6: Just the Data/ Modular Intro 
//split all code in current module into multiple modules
//objectives what is JS modules, modules allow to share code 
//by import and export but not always have access

/* Our module has 3 main sections: 
data defined, 
function defined, 
logic defined/function invoked to provide output*/

/*Your job:
move the data section into its own module, data.js
In data.js export data(inventory) from other js into data.js. 
Lastly, in the properties.js module(averagePrice.js), 
you will import it back so it can run again.*/

//Step1: cut inventory list from averagePrice.js
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


//Exports data and ALLOWS OTHER MODULES to import it for USE.
module.exports = { inventory }


//Now averagePrice.js doesn't have array so Importing the Data back
//paste this is averagePrice.js:
/*const { inventory } = require("./data.js") */


