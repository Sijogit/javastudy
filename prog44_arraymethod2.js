//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleg',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(' display all product name');

proname=products.map(pro=>pro[1]).forEach(item => {console.log(item);});
console.log('-----------------');
//2. display product whose price< Rs.50
console.log('product whose price< Rs.50');

proname=products.filter(pro=>pro[2]<50).forEach(item=>{console.log(item[1]);})
console.log('-------------------');

//3. print price of oreo
console.log('price of oreo');
proname=products.filter(pro=>pro[1]=='oreo').forEach(item=>{console.log(item[2]);})
console.log('------------------------');

//4. print costly product name
console.log('print costly product name');
costly=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(costly[1]);
console.log('--------------------');
//5. display out ofstock product
console.log('display out ofstock product');
outstock=products.filter(pro=>pro[3]==0).forEach(item=>{console.log(item[1]);})
console.log('-----------------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
stock=products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(item=>{console.log(item[1]);})
console.log('---------------------');
//7. print product having maximum available stock
console.log('print product having maximum available stock');
maxstock=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(maxstock[1]);
console.log('-------------');

//8. is there any product that can be purchase by Rs.10
console.log('product that can be purchase by Rs.10');
purchase=products.some(pro=>pro[2]<10)
console.log(purchase?'yes':'no');
console.log('--------------------');
//9. is there any product in the range of 10 to 30 rupees 
console.log(' product in the range of 10 to 30 rupees ');
range=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(range?'yes':'no');
console.log('------------------------');
//10. print all products in the range of 10 to 30 rupees 
console.log('all products in the range of 10 to 30 rupees ');
prorange=products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>{console.log(item[1]);})
console.log('--------------------------------');