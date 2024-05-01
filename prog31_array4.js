//linear search
// var arr=[10,11,12,3,2,4,56]
//check whether 2 is present or not
var a=[10,11,12,3,4,56,]
searchitem=2
inpresent=false
for(let num of a){
    if(searchitem==num){
        inpresent=true
        break;
    }


    
}console.log(inpresent?'present':'not present');