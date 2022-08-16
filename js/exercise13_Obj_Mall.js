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
    budget: 50000,
    getSqrt: function() {
        let totalSqrt = 0;
        shoppingMallData.shops.forEach(shop => {
            totalSqrt += shop.width * shop.length;
        });
        return totalSqrt;
    },
    getValue: function() {
        return shoppingMallData.getSqrt() * shoppingMallData.height;
    },
    getBill: function() {
        return shoppingMallData.getValue() * shoppingMallData.moneyPer1m3;
    }
}

function isBudgetEnough(data) {
    return data.getBill() <= data.budget ? `Бюджета достаточно` : `Бюджета недостаточно`;
}

console.log(isBudgetEnough(shoppingMallData));
