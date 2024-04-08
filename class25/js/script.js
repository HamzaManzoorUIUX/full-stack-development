// function area(length, width) {
//     return length * width
// }
// function xyz(a, b) {
//     return a * a + b * b + 2 * a * b
// }
// function namePrint() {
//     console.log("my name is Hamza Manzoor");
// }
// function GradeCalculator(value) {
//     if (value > 100) {
//         console.log("wrong input")
//     }
//     else if (value > 85) {
//         console.log("A+")
//     }
//     else if (value > 80) {
//         console.log("A");
//     }
//     else if (value > 70) {
//         console.log("B");
//     }
//     else if (value > 60) {
//         console.log("C");
//     }
//     else {
//         console.log("F");
//     }
// }
// console.log(area(10, 20))
// console.log(area(20, 10))
// console.log(area(20, 50))
// console.log(area(90, 50))
// console.log(xyz(2, 5));
// namePrint()
// namePrint()
// namePrint()
// namePrint()
// namePrint()
// const value = +prompt("Enter your marks")

// let a = "Hamza"
// if (a == 'hamza') {
//     console.log("hi Hamza")
// }
// else {
//     console.log("who are you");
// }
// Grad

// eCalculator(50)
function singleQA(a, b, c, i) {
    if (i) {
        return (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    }
    else {
        return (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    }
}
function QA(a, b, c) {
    return [singleQA(a, b, c, true), singleQA(a, b, c, false)]
}
console.log(QA(5, 50, 3));
function AreaFormula(r, d) {
    if (r) {
        return Math.PI * Math.pow(r, 2)
    }
    else if (d) {
        return Math.PI * Math.pow((d / 2), 2)
    }
    else {
        return "Please provide me a value"
    }
}
document.write(AreaFormula(50))