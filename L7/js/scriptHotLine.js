// const names = document.querySelectorAll(".list-item__title");
// const desc = document.querySelectorAll(".list-item__specifications-text");
// const prices = document.querySelectorAll(".price__value");
// const pricesDesc = document.querySelectorAll(".text-sm");
// let resultTxt = "";

// console.log(names.forEach((prodName, i)=>{resultTxt += `${prodName.textContent.split(' ').join(' ').split('\n').join('').trim()};${desc[i].textContent.split(' ').join(' ').split('\n').join('').trim()};${prices[i].textContent};${pricesDesc[i].textContent}\n`;}));
// const arr = [document.querySelectorAll(".list-item__title"),document.querySelectorAll(".list-item__specifications-text"),document.querySelectorAll(".price__value"),document.querySelectorAll(".text-sm")];

const getGoods = (arr)=>{let rt = ''; arr[0].forEach((prodName, i)=>{rt += `${arr[0][i].textContent.split(' ').join(' ').split('\n').join('').trim()};${arr[1][i].textContent.split().join('').trim().split('\n').join('').trim()};${arr[2][i].textContent.split(' ').join(' ').split('\n').join('').trim()}\n`;}); return rt;};console.log(getGoods([document.querySelectorAll(".list-item__title"),document.querySelectorAll(".list-item__specifications-text"),document.querySelectorAll(".price__value"),document.querySelectorAll(".text-sm")]))


