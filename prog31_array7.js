//w.a.p to print pairs whoes sum is 6
sum=10
g=false
b=[2,3,4,5,1,9]
for(i=0;i<=b.length;i++){
    for(j=i+1;j<b.length;j++){

        if(b[i]+b[j]==sum){
            g=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}!g&&console.log('no pairs');//truthy opeator !$$
