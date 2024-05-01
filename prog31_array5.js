//input[4,5,6]
//output[11,10,9]
input=[4,5,6]
output=[]
sum=0
console.log(input);
for(let num of input){
    sum=sum+num
}
for(let num of input){
    output.push(sum-num)
}console.log(output);
console.log('---------------------');

//second method 4+5, 5+5, 6+5
input=[4,5,6]
output=[]
for(let n of input){
    output.unshift(n+5)

}
console.log(output);