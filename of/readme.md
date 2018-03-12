The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

Array.of differs from the Array constructor in the handling of integer arguments:
    - Array.of(7)
        creates an array with a single element, 7
    - Array(7)
        creates an EMPTY array with a LENGTH property of 7 (the console logs <7 empty items>, NOT ACTUAL UNDEFINED VALUES!)