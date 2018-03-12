console.log(Array.from('michael'));
// expected output: ["m", "i", "c", "h", "a", "e", "l"]

// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: [2, 4, 6]

// Array from an Array-like object (arguments)
function f() {
    return Array.from(arguments);
}
console.log(f(1, 2, 3));
// returns [1, 2, 3]