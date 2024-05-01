//  *  *  *  *
//   *  *  *
//    *  *
//      *
for(row=4;row>=1;row--){
    str= ''
    for(space=4;space>=row;space--){
        str= str+ ' '
    }
    for(col=1;col<=row;col++){
        str = str+ ' *'
    }
    console.log(str);
}


console.log('--------------------------');
//1 2 3 4 
//1 2 3 
//1 2 
//1

for(row=4;row>=1;row--){
    str=''
    for(space=4;space>=row;space--){
       str= str+' '
       //console.log(str);
       
    }
    for(col=1;col<=row;col++){
        str= str+' '+col
     // console.log(str);
    }
    console.log(str);
}

//    *
//   * *
//  *   *
// *******
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+' *'
    }console.log(str);
}

//*
//* *
//* * * 
//* * * * 
//* * * * *
//* * * * 
//* * *
//* *
//*

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    
    console.log(str);
}
for(row=4;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    
    console.log(str);
}
console.log('------------------');

//      *
//    *   *
//   *  *  *
//  *  *  *  *
//   *  *  *
//    *  *
//      *
for(row=1;row<=4;row++){
    str= ''
    for(space=4;space>=row;space--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str= str+ ' *'
    }console.log(str);
}
for(row=3;row>=1;row--){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
      
    }

    for(col=1;col<=row;col++){
        str=str+' *'
    }console.log(str);
} 
