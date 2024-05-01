//w.a p. to check whether a given number is prime or not using for loop
num=5
count=0
for(i=1;i<=num; i++){ //1<=5 //2<=5 //3<=5 //4<=5 //5<=5
    temp=num%i        //5%1=0 //5%2=1 //5%3=2 //5%4=1 //5%5=0
    if(temp==0){
        count++   //count=1 //count=2
    }
}
if(count==2){
    console.log("prime");
}else{
    console.log("not prime");
}
console.log("====================================");
//w.a.p to find gcd /hcf of any given numbers
num1=12
num2=28
hcf=0

for(i=1; i<=num1 && i<=num2; i++){
    if(num1%i==0 && num2%i==0){
    hcf=i
}
}
console.log(hcf);  
//w a p to display all prime numbers from 2 to 50
//w a p to display all armstrong numbers from 8 to 500