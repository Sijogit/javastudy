weekdays = ['mon','tue','wed']
for(i=0;i<=2;i++){
    console.log(weekdays[i]);
}   
weekdays = ['mon','tue','wed']
for(let x in weekdays){
    console.log(weekdays[x]);
}
console.log('--------------------');
weekdays = ['mon','tue','wed']
for(let days of weekdays){
    console.log(days);
}