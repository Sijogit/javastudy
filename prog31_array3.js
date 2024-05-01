//expenses= [12000,23000,40000,34000,55000,24000,10000,14000]
//find the lowest expense
expenses=[12000,23000,40000,34000,55000,24000,10000,14000]
lowest=expenses[0]
for(let num of expenses){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);

console.log('--------------------------------');

//find the highest expenses

expenses=[12000,23000,40000,34000,55000,24000,10000,14000]
highest=expenses[0]
for(let num of expenses){
    if(num>=highest){
        highest=num
    }
}console.log(highest);

console.log('-----------------------------');
//find the total expenses
expenses=[12000,23000,40000,34000,55000,24000,10000,14000]
sum=0
for(let num of expenses){
    sum=sum+num
}console.log(sum);