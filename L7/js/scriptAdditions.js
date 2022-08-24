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
    //minutes = timeLine % 60; //реалізація препода
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

console.log(getTimeFromMinutes(60));
//console.log(21 % 10);

// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    /* if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
        return 0;
    } */
    if (typeof(a) !== 'number' || typeof(b) !== 'number'  || typeof(c) !== 'number'  || typeof(d) !== 'number' ){
        return 0;
    }

    if (a - b > 0) {
        if (a - c > 0) { 
            if (a - d > 0){
                return a;
            }
        } else if (c - d > 0) {
            return c;
        } else {return d;}
    } else {
        if (b - c > 0 ){
            if (b - d > 0){
                return b;
            }
        } else {
            if (c - d > 0){
                return c;
            } else {
                return d;
            }
        }
    }
}
/* function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
} */
console.log(findMaxNumber(4,2,10,3));


function fib(count) {
    let result = [0,1],
        resStr = '0';
    if (count <= 0 || !Number.isInteger(count)) {return '';}

    for (let i = 2; i < count; i++){
        result[i] = result[i-1] + result[i-2]
        //resStr += ` ${result[i]}` 
    }  

    for (let i = 1; i < count; i++){
        resStr += ` ${result[i]}` 
    }  
    return resStr;      
}

console.log(fib(12));
а