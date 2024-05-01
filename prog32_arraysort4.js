//w.a.p to print pairs whoes sum is 6
b=[2,3,4,5,8]
low=0
up=b.length-1
pairsum=7
ispresent=false
while(low<up){
     currentsum=b[low]+b[up]
     if(currentsum==pairsum){
        ispresent=true
        console.log(`${b[low]} , ${b[up]}`);
        low++
     }
     else if(currentsum>pairsum){
        up--
     }
     else if(currentsum<pairsum){
        low++
     }
}
!ispresent&&console.log('no pair sum');