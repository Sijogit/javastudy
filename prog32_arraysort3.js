//w.a.p to print the common number in the given two arrays  using binary search
p=[10,11,12,20,30]
q=[11,20,25,30,33]
a=0
b=0
count=0
inpresent=false
while(a<p.length && b<q.length){
    count++
    if(p[a]==q[b]){
        inpresent=true
        console.log(p[a]);
        a++ 
        b++
    }
    else if(p[a]<q[b]){
        a++
    }
    else if(p[a]>q[b]){
        b++
    }
} 
console.log(count);
!inpresent&&console.log('no');