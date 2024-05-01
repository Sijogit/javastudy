//object inheritance
Baleno={
    model:"hatch back",
    varient:["automatic","manual"],
    make:"maruti"
}
Glanza={
    make:"Toyota"
}
Glanza.__proto__= Baleno
console.log();
console.log(Glanza.model);
console.log(Glanza.varient);