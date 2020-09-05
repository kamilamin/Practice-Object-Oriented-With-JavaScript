// Impure function examples
const arr = [1, 2, 3];

function addElementToArr(element) {
    arr.push(element);
}

addElementToArr(4);
console.log("Impure-function", arr);

//Pure function examples
// Bad practice because in this function we manipulate the array variable and doesn't return a new value

const array = [3, 2, 1];

function addElementToArray(a, item) {
    a.push(item);
}

addElementToArray(array, 0);

console.log("Pure-function-bad-practice", array);

// Pure Function

const array1 = [3, 2, 1];

function addElementToArray1(a, item){
    return [...a, item];
}

console.log("Pure-function", addElementToArray1(array1, 0));
console.log(array1);
