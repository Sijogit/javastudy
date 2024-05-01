//nested array

var a=[[10,23],[34,56],[2,4],[57,89],[7,9]]

//print all numbers les than 10  ans=2,4,7,9
lessthan=10

for(let x of a){
     for( let f of x )
     if(f<lessthan)
     console.log(f);
}     