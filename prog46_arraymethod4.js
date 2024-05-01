numbers=[[10,20,[96,100]],[14,28,69],[11,21,[8,55,41]],[76,45,31,]]
//flat()-
//flat(depth)-
//flat(infinity)-

//1. find the numbers greater than 50
console.log(numbers.flat(Infinity).filter(item=>item>50));
console.log('------------------------');
//2. find the largest number
console.log(numbers.flat(Infinity).reduce((item1,item2)=>item1>item2?item1:item2));
console.log('----------------------');
//3. find the smallest number
console.log(numbers.flat(Infinity).reduce((item1,item2)=>item1<item2?item1:item2));
console.log('----------------------');
//4. find the total number
console.log(numbers.flat(Infinity).reduce((item1,item2)=>item1+item2));