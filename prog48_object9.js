products=[
    {pid:100, pName: 'apple', band: '5g',price: 120000,display: 'led'},
    {pid:101, pName: 'samsaung',band: '5g',price: 45008,display: 'led'},
    {pid:102, pName: 'blackberry', band: '4g',price: 50000,display: 'led'},
    {pid:103, pName: 'nokia', band: '3g',price: 1200,display: 'lcd'},
    {pid:104, pName: 'motorola', band: '4g', price: 10000,display:'lcd'}
]
//1. print product name only
console.log('print product name only');

for(let data of products ){
    console.log(data.pName);
}
console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
products.map(data=>data.pName).forEach(item => {console.log(item);});


console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

console.log('----------------------------------');
//2. print all mobile details whose display is lcd
console.log('print all mobile details whose display is lcd');

for(let data of products){
    if(data.display=='lcd'){
        console.log(data);
    }
}
console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk');
var q=products.filter(data=>data.display=='lcd')
console.log(q);
console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');


 console.log('---------------------------');
//3. print 5g mobile phone name
console.log('print 5g mobile phone name');
for(let data of products){
    if(data.band=='5g'){
        console.log(data.pName);
    }
}
console.log('ooooooooooooooooooooooooooooo');
products.filter(data=>data.band=='5g').forEach(item=>{console.log(item.pName);})
console.log('ooooooooooooooooooooooooooooo');

console.log('------------------------');
//4. sort mobile based on price
console.log('sort mobile based on price');
sortedmobile=products.sort((a,b)=> a.price-b.price)
console.log(sortedmobile);
//5. print costly mobile
console.log('print costly mobile');
mostexpmob=products[0]
for(let i=1; i<products.length; i++){
    if(products[i].price>mostexpmob.price){
        mostexpmob=products[i]
    }
}console.log(mostexpmob);

console.log('--------------------');
console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyy');
costly=products.reduce((data1,data2)=>data1.price>data2.price?data1:data2)
console.log(costly.pName);
console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyy');

//6. print low cost mobile
console.log('print low cost mobile');
lowcoastmob=products[0]
for(i=1;i<products.length;i++){
    if(products[i].price<lowcoastmob.price){
        lowcoastmob=products[i]
    }
}console.log(lowcoastmob);
console.log('mmmmmmmmmmmmmmmmmmmmm');
lowcost=products.reduce((data1,data2)=>data1.price<data2.price?data1:data2)
console.log(lowcost.pName);
console.log('mmmmmmmmmmmmmmmmmmmmmmm');
