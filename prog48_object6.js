numarray=[10,20,30,40,30,20,50,30,60,70,10,40,80]
//find number count
nc={}
for(let item of numarray){
    console.log(item);
    if(item in nc){
        nc[item]+=1
    }
    else{
        nc[item]=1
    }
}console.log(nc);

nc1={}
numarray.forEach(item => item in nc1?nc1[item]+=1:nc1[item]=1);
console.log(nc1);