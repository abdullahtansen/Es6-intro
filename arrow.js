// function declaration
function add(first,second){
    const total = first + second ;
    return total;
}
const result = add(10,20);
console.log(result);

// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
const add2 = function(first,second){
    const total =  first + second;
    return total;
}
function add(first,second){
    const total = first + second;
    return total;
}
// arrow function 
const add6 = (first,second) => first + second;

// interview question: difference between 
// function declaration,function expression and arrow function.
