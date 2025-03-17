function pipe(funcs) {
    return function (value) {
        return funcs.reduce((result, func) => func(result), value)
    }
}


const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y

console.log(pipe([
    times(2),
    times(3)
])) // x * 2 * 3

console.log(pipe([
    times(2),
    plus(3),
    times(4)
])) // (x * 2 + 3) * 4

console.log(pipe([
    times(2),
    subtract(3),
    divide(4)
])) // (x * 2 - 3) / 4