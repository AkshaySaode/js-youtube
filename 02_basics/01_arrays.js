//Array

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[1]);

//array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop() // to remove last digit from array
// console.log(myArray);

// myArray.unshift(5)
// myArray.shift()


// const newArray = myArray.join()
// console.log(myArray);
// console.log(typeof newArray);

//***************slice, splice******************//

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log("C ", myArray);
console.log(myn2);










