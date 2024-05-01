//semtence="good afternoon all"
//w.a.p to print all vovels in the given sentence

sentence="good afternoon all"
vovels=['a', 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
charactor=sentence.split("")
for(let char of charactor){
    if(vovels.includes(char)){
        console.log(char);
    }
}

console.log('--------------------------------------------');

sentence1="good afternoon all"
vovels1=['a', 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
Array.from(sentence1).filter(char=>vovels.includes(char)).forEach(item=>{console.log(item);})
console.log('-------------------------');

ar=Array.from(sentence1)
console.log(ar);
fil=ar.filter(char=>vovels.includes(char))
console.log(fil);
fil.forEach(item=>{console.log(item);})
