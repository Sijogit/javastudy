var car ={
    name:"boleno",
    model:"Hatch back",
    manufacturer:"Maruti",
    price:"10 lacks"
}
//display car name and manufacturer name and price
    console.log(`car name is ${car.name} , car model is ${car.manufacturer}, price of the car is ${car.price}`);
    console.log('--------------------------');

//check "model" key is present in car , if present display its value
console.log('--------------------------');

console.log("model" in car?`car model is : ${car.model}`:'not present');
console.log('------------------------');
//add "variant" key to car with value as "manual"
car["variant"]=["manual"]
console.log(car);
console.log('--------------------------');
//add another value "automatic" to "variant" key
car.variant.push("automatic")
console.log(car);
console.log('-----------------------------');

//add "color" key to the car with values as "red", "yellow", "white", "black" 
car["color"]=["red","yellow", "white", "black"]
console.log(car);