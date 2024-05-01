//w.a.p to check whether a given number is a mobile number or not using arrow function
mobile=(num)=>{
   return num.length==10? `${num} is a mobile number` : `${num} is not a mobile number`
}
console.log(mobile('984776580'));
console.log('------------------');

//w.a.p to check whether given mail id is gmail or not using arrow function


const wordend=(w)=>{
return w.endsWith('@gmail.com')?`${w} is a gmail id`:`${w} is not a gmail id`
}
console.log(wordend('sijogmail.com'));
console.log('------------------');


//w.a.p to check whether given word starts with q using arrow function


starting=(w)=>{
  return w.startsWith('q')||w.startsWith('Q')?`${w}the word starts with q `:`${w}the word not starts with q`
}
console.log(starting('Qqube'))
