const GadgetFactory = require("./gadgetFactory");

const myLaptop = GadgetFactory.createGadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "Bab's MacBook Pro"
});

const myTablet = GadgetFactory.createGadget("Tablet", {
    ram: 8,
    hdd: 128,
    name: "Bab's Tablet",
    network: "4G"
});


console.log(myLaptop);
console.log(myTablet);