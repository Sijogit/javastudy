//    *
//   * *
//  *   *
// *******
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }console.log(str);
}
console.log('----------------------------------');

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || col==1 || col==5){
            str=str+' *'
        }
        else{
            str=str+'  '
        }
    
       
    }console.log(str);
}
console.log('----------------------------------');

//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *
   for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if(row+col==5 || col-row==3){
           str=str+'*'
        }
        else{
            str=str+' '
        }
    }console.log(str);
   }
   for(row=1;row<=3;row++){
    str=''
    for(col=1;col<=7;col++){
        if(col-row==1 || row+col==7){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }console.log(str);
   }

// 1
// 0 1
// 1 0 1
// 0 1 0 1
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        let n=(col+row)%2
      if(n==0){
        str=str+'1'
      }  
      else{
        str=str+'0'
      }
    }console.log(str);
}