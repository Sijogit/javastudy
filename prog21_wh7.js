// w.a.p to find the reverse of a given number
// eg:123=321
num=12345
rem=0
rev=0
while(num>0){
    rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)

}console.log(rev);