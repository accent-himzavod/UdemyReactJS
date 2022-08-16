const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function getSqrt(shops) {
    let totalSqrt = 0;
    shops.forEach(shop => {
        totalSqrt += shop.width * shop.length;
    });
    return totalSqrt;
}

function getValue(square, height) {
    return square * height;
}

function getBill(value, price) {
    return value * price;
}


function isBudgetEnough(data) {      
    return getBill(getValue(getSqrt(data.shops),data.height),data.moneyPer1m3) === data.getBill 
    ? `Бюджета достаточно` : `Бюджета недостаточно`;
}

console.log(isBudgetEnough(shoppingMallData));