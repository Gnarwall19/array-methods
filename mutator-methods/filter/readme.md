***
The filter() method creates a new array with all elements that pass the test implemented bt the provided function.

SYNTAX:
var newArray = arr.filter(callback[, thisArg]);

filter() calls a provided CALLBACK FUNCTION once for EACH ELEMENT in an array, and constructs a new array of all the values for whcih callback returns a value that coerces to true. Array elements which do not "pass the callback test" are skipped, and are not included in the new array.

callback is invoked with three arguments:

    1) the value of the element
    2) the index of the element
    3) the Array object being traversed