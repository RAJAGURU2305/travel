// an array is special variable , which can hold more than one value 
//collection of datas or objects

const cars= ["tata","volvo","bmw"]
console.log(cars);
//accessing array elents
// * you can access the array element by using index number
// *array index starts with zero
console.log("2nd index value of cars array",cars[2]);
cars[3] ="ferrari"
console.log("adding value",cars);
// udating value to an array element
cars[2]="nexon"
console.log("updating value",cars);

// array are special  type of objects
// type of opeartor in js return "objects"
// to solve this problem ECMA script5 2009 defined a new method
console.log(Array.isArray(cars));