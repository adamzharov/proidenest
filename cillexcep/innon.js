function createCustomFunction() {
    return function (context, o, x, y) {
        // Function body implementation goes here
        console.log(context, o, x, y);
    };
}

const customFunction = createCustomFunction();
customFunction('example', 1, 2, 3); // Output: "example 1 2 3"
