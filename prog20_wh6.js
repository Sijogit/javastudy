// imput =     2       3           4       5
// output=     24      369         4936    61725
//             2+22    3+33+333   4+44+444+4444
i=1
input=3
sum=0
string=''
while(i<=input){
    string=string+input
    sum=sum+Number(string)
    i++
}
console.log(sum);
// ----------------------------------------------
j=1
input=3
string=''
while(j<=input){
    string=string+j
    pro=input*Number(string)
    j++
    
}

console.log(pro);