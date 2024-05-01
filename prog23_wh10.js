//w.a.p to display numbers whoes exponential is in the range of the 8 tp 36
//user can inpput the power to find the exponential for a purticular number 
//power =2 
//1  4  9  16  25  36  49
power=2
i=1

while(i<36){

    if(8<=i**power && i**power<=36){
        console.log(i);
    }
    i++
}