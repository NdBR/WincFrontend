const icecreams = {
    chocolate: {
        price: 1.5,
        rating: 5,
    },
    vanilla: {
        price: 2,
        rating: 3,
    },
};
const printIceCreamProperty = (icecreams, name, property) => {
    console.log(
        `The ${property} of ${name} icecream is ${icecreams[name][property]}`
    );
};
printIceCreamProperty(icecreams, "chocolate", "price");
printIceCreamProperty(icecreams, "chocolate", "rating");
printIceCreamProperty(icecreams, "vanilla", "price");
printIceCreamProperty(icecreams, "vanilla", "rating");