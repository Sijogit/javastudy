//call back function
function greet(name,callback){
    console.log('hai',name);
    callback()
}
function callme(){
    console.log('i am a call back function');
}
greet('sijo',callme)