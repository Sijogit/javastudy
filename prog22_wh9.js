// w.a.p. to check a three digit number is armstrong number or not
//eg 153= 1**3 + 5**3 + 3**3 = 1+125+27=153
num=152
temp=num
rem=0
sum=0

while(num>0){     
    rem=num%10  //152%10=2  15%10=5  1%10=1
    sum=sum+ rem**3 //0+2*2*2=8, 8+125=133 133+1*1*1=134
    num=parseInt(num/10) //152/10=15.2(parseInt)=15, 15/10=1.5(parsint)1
}
if(temp==sum){
    console.log('the number is armstrong');
}
else{
    console.log('number is not in armstrong');
}