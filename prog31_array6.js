//w.a.p to print the duplicated elements of given array
a=[10,20,30,20,30,40,50,60,10]
inpresent=false
for(i=0;i<=a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i] == a[j]){
             console.log(a[i]);
             inpresent=true
             break;

        }
        
        
    }
    
}if(inpresent==false){
    console.log('no duplicate');
}