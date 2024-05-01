a=[10,11,12,13,14,15]
//w.a.p to create a new array have squares of elements in the given array

sq=a.map(num=>num**2)
console.log(sq);

//w.a.p to crate a new array have cube of elements in the given array

cube=a.map(num=>num**3)
console.log(cube);
//w.a.p to crate a new array with number <=13 then increment and number >=13 then decrement
b=a.map(num=>num<=13?num+1:num-1)
console.log(b);
