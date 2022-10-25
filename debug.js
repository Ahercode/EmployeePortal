const disdata = [{
        name: "Italian Pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    }, {
        name: "Vegetarian pizza",
        price: 6.45
    }
];

let tax = 1.20;

function getPrices(taxBoolean) {
    for (let i = 0; i < disdata.length; i++) {
        let finalprice = 0;

        if (taxBoolean == true) {
            finalprice = disdata[i].price * tax;
        } else if (taxBoolean == false) {
            finalprice = disdata[i].price;
        } else {
            console.log("You need a bolean to calc product price");
            // return;
        }
        console.log(`Dish :${disdata[i].name} and price is ${finalprice}`);
    }
}


function getDiscounts(taxBoolean, guests) {
    let discount = 0
    if (typeof guests === "number" && guests > 0 && guests < 30) {
        if (guests < 5) {
            discount = 5;
            getPrices(taxBoolean);
            return console.log(`Discount is :${discount}`)

        } else if (guests >= 5) {
            discount = 10;
            getPrices(taxBoolean);
            return console.log(`Discount is :${discount}`)
        }

    }
    console.log(`guests is a type of number but got ${guests}`);



}

getDiscounts(true, "5");
getDiscounts(false, 2);