text= "hai hello all hello world";

//w.a.p to print the word count from the given string
//output ={hai:1,hello:2,all:1, world:1}
textarray=text.split(" ")
console.log(textarray);
wordcount={}
for(let item of textarray){
    if(item in wordcount){
        wordcount[item]+=1
    }
    else{
        wordcount[item]=1
    }
}console.log(wordcount);



 console.log('555555555555555555555555555555555555555555555555555555555555');

 wc={}
 text.split(" ").forEach(item => item in wc?wc[item]+=1:wc[item]=1);
 console.log(wc);