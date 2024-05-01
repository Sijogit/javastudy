// write a program to swap between 2 numbers
// n1=20 n2=30     n1=30 n2=20

// algorithm:
// n1 and n2

n1 =20
n2=30
// create a temporary variable
temp =0
console.log(`the initial value of n1 is ${n1} and n2 is ${n2}`);
// assign n1 to temp
temp=n1
// assign n2 to n1
n1=n2
// assign temp to n2
n2=temp
console.log(`the final value of n1 is ${n1} and n2 is ${n2}`);
// -------------------------------------------
num1=60
num2=40
console.log(`the initail vale of num1 and num2 is ${num1} and ${num2}`);
num1=num1+num2
num2= num1-num2
num1=num1-num2
console.log(`the final value of num1 and num2 is ${num1} and ${num2}`);