// Immediately Invoked Function Expression (IIFE)
(function chai(){
    // named iife
    console.log(`DB connected`);
})();
// first parenthesis is for function definition and the second parenthesis is for calling the function
// IIFE => sometimes we face problems due to pollution in gloabl scope, So to remove the pollution of global scope we use iife, and it is immediately invoked
// always use semicolon in the end of the iife, to end its context

((name) => {
    // unnamed iife
    console.log(`DB connected 2 ${name}`);
})('aniket');
