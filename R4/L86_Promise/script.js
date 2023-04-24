'use strict';



const promiss = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log(`Підготовка даних...`);
        const product = {
            name: "apple",
            price: 2300
        };
        resolve(product);
    },2000);
    
});

promiss.then((prod)=>{
    console.log(prod);
    prod.status = 'ordered';
    
    // const promiss2 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         prod.status = 'done';
    //         console.log(prod.status);
    //     },1000);
    //     resolve(prod);        
    // });

    // promiss2.then(data => {
    //     console.log(data);
    // });
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            prod.status = 'done';
            console.log(prod.status);
        },1000);
        //reject();
        resolve(prod);        
    });

    
}).then(data => {
    console.log(data);
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(()=>{
    console.error(`Error occured!`);
}).finally(()=>{
    console.log(`Finaly`);
});

//************************* */
const test = time => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(time), time);
    });
};

// test(1000).then(interval => console.log(`${interval} ms`));
// test(2000).then(interval => console.log(`${interval} ms`));
// test(1000).then(interval => console.log(`${interval} ms`));

Promise.all([test(1000), test(3000), test(2000)]).then(interval => console.log(`${interval} ms`));

Promise.race([test(3000), test(1000), test(2000)]).then(interval => console.log(`${interval} ms`));


//************************* */

console.log(`Загрузка даних...`);

setTimeout(()=>{
    console.log(`Підготовка даних...`);
    const product = {
        name: "apple",
        price: 2300
    };
    
    setTimeout(()=>{
        product.status = 'ordered';
        console.log(product.status);
    },1000);
},2000);