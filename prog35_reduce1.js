a=[1,2,3,4,5,6,7]
//find the hieghest number

hieghest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(hieghest);
//find the lowest number
lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);

//find the sum
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);