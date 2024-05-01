pattern="ABCABBCCA"
//w.a.p to print the first recursive letter=A
recu=pattern.split("")
console.log(recu);
rl={}
for(let item of recu){
    if(item in rl){
        console.log(`recursive item is: ${item}` );
        break;
    }
    else{
        rl[item]=1
    }
}


