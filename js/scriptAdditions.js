//=================

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i < lines; i++){
     
    for (let j = i; j < lines; j++) {
        result = result + ' '; 
    } 

    for (let f = 0; f < i * 2 + 1; f++) {
        result = result + '*'; 
    }    

    result = result + '\n'; 
}

console.log(result)

// Ріщення задачі
/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result) */


/* function getCoupeNumber(seatNum) {
    if (typeof(seatNum) != 'number' || seatNum < 0 || seatNum - seatNum.toFixed() !== 0) {
       return "Ошибка. Проверьте правильность введенного номера места";
    }else if (seatNum === 0 || seatNum > 36) {
       return "Таких мест в вагоне не существует";
    } else {
       const CoupeNumber = seatNum / 4;
       
       if (CoupeNumber - CoupeNumber.toFixed() !== 0) {
           return +CoupeNumber.toFixed() + 1;
       } else {
           return CoupeNumber;
       }
   }
} */

function getCoupeNumber(seatNum) {
    if (typeof(seatNum) != 'number' || seatNum < 0 || seatNum - seatNum.toFixed() !== 0) {
       return "Ошибка. Проверьте правильность введенного номера места";
    }else if (seatNum === 0 || seatNum > 36) {
       return "Таких мест в вагоне не существует";
    } else {
      return Math.ceil(seatNum / 4);      
    }
}

console.log(getCoupeNumber(23));

console.log( 8 % 10);

function returnNeighboringNumbers(value) {
    return [value-1, value, value+1];
}

// Место для второй задачи
/* function returnNeighboringNumbers(value) {
    let aValue = [];
    aValue[0] = --value;
    aValue[1] = value;
    aValue[2] = value++;
    return aValue;
} */

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(x, y) {
    let resultStr = '';
    let xx = x;
    
    if (typeof(y) !== 'number' || y <= 0 ) {
        return x;
    }
    
    for (let i = 0; i < y; i++) {
        resultStr += xx;
        if (i < y - 1) {resultStr +=  '---';  xx += x;}
    }
    return resultStr;
}

console.log(getMathResult(3,10));


// Место для первой задачи
function getTimeFromMinutes(timeLine) {
    let hour, minutes, hourText, minText;

    if (typeof(timeLine) != 'number' || !Number.isInteger(timeLine) || timeLine < 0) {
       return "Ошибка, проверьте данные";
    }

    if (timeLine < 60){
        hour = 0;
    } else {
        hour = (timeLine / 60);
        hour = hour - (hour % 1);
    }
    minutes = timeLine - (hour * 60);

    if (minutes < 0) {minutes = 0}
    

    if (hour % 10 === 1) {
         hourText = `${hour} час`;
    } else if (hour % 10 > 1 && hour % 10 < 5 ) {
         hourText = `${hour} часа`;
    } else {
         hourText = `${hour} часов`;
    }
    
    if (minutes % 10 === 1) {
         minText = `${minutes} минута`;
    } else if (minutes % 10 > 1 && minutes % 10 < 5 ) {
         minText = `${minutes} минуты`;
    } else {
         minText = `${minutes} минут`;
    }
    return `Это ${hourText} и ${minText}`
}

console.log(getTimeFromMinutes(151));
console.log(21 % 10);