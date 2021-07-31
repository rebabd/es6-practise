// const add = (num1, num2) => num1 + num2;

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doMath(7, 3);
console.log(result);