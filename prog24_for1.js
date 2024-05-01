// w.a.p to print from 1 to 5 using for loop
for(i=1;i<=5; i++){
    console.log(i);
}
for(i=5; i>=1; i--){
    console.log(i);
}
console.log("====================================");
// w.a.p to create a for loop which have the ability to print upto 10 but dispaly at 5

for(i=1;i<=10; i++){
   if(i<=5){
    console.log(i);
   }
}
console.log("====================================");
//or
for (i=1; i<=10; i++){
    console.log(i);
    if(i>=5){
        break;
    }
}
console.log("====================================");
//w.a p. to check whether a given number is prime or not using for loop
