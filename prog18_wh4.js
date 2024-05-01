// w.a.p to print 'FIZZ' if the number is divisible by 3
// 'BUZZ'if the number is divisible by 5
// 'FIZZBUZZ' if the number is divisible by 15
i=100
if(i%3==0){
    console.log('FIZ');

}else if(i%5==0){
    console.log('BUZZ');
}else if(i%15==0){
    console.log('FIZZBUZZ');
}
else{
    console.log('not divisible');
}