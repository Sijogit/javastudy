// w.a.p to print the second largest among three umbers and arrange them in descending
n1=65
n2=20
n3=30
if(n1>n2&&n1<n3||n1<n2&&n1>n3){
    console.log(`${n1}is second largest`);
}
else if(n2>n1&&n1<n3||n2<n1&&n2>n3){
    console.log(`${n2} is second largest`);

}
else{
    console.log(`${n3} is second largest`);
}
// --------------------------------
num1=20
num2=20
num3=20
if(num1>num2&&num1>num3){
    if(num2>num3){
        console.log(`${num2}is second largest number`);
        console.log(`descending order ${num1} ${num2} ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest number`);
        console.log(`descending order ${num1} ${num3} ${num2}`);
    }
}else if(num2>num1&&num2>num3){
    if(num1>num3){
        console.log(`${num1} is the second largest number`);
        console.log(`descending order ${num2} ${num1} ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest number`);
        console.log(`descending order ${num2} ${num3} ${num1}`);
    }
}else if(num3>num1&&num3>num2){
    if(num1>num2){
       console.log(`${num1} is the second largest number`);
       console.log(`descending order ${num3} ${num1} ${num2}`);
    }
    else{
        console.log(`${num2} is the second largest number`);
        console.log(`descending order ${num3} ${num2} ${num1}`);
    }
}else{
    console.log('all are equal');
}