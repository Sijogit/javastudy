var a=[10,11,12,3,4,2]
a.sort((num1,num2)=>num1-num2)
low=0
up=a.length-1
searchitem=311
ispresent=false
while(low<=up){
    mid=Math.floor((low+up)/2)
    if(a[mid]==searchitem){
        ispresent=true
        console.log('present');
        break
    }
    else if(a[mid]>searchitem){
         up=mid-1
    }
    else if(a[mid]<searchitem){
        low=mid+1
    }
}        
!ispresent&&console.log('notpresent');