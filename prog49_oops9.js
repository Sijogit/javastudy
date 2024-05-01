exp="%10*2+5"
console.log('exeption handling');
try {const result = eval(exp)
      console.log("result:", result);}
  catch{console.log('error in ival statement');}
   finally{console.log('task completed');}