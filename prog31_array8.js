//w.a.p to print the common number in the given two arrays 
p=[10,11,12,20,30,]
q=[11,20,25,33,12]
count=0
inpresent=false
for(let c of p){
    for(let x of q){
        count++
        if(c==x){
            inpresent=true
            console.log(c);
            break;
        }
    }
}
console.log('------------');
console.log(count);
!inpresent&&console.log('no common numbers');