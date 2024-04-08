// const a = +prompt("Please enter Value")
// if (!(a > 100 && a < 200 || a == 75)) {
//     console.log(a, " is a greater number")
// }

const evenOddFinder = (abc) => {
    if (abc % 2 == 0) {
        console.log(`${abc} is a even number`)
    }
    else {
        console.log(`${abc} is a odd number`);
    }
}
// const xyz = +prompt("Please enter value")
// evenOddFinder(xyz)
// for (let a = 0; a <= 100; a++) {
//     evenOddFinder(a)
// }

const fictorialFinder = (a) => {
    let x = 1
    for (let i = 1; i <= a; i++) {
        x = x * i
    }
    return (x);
}
for (let xyz = 0; xyz < 10; xyz++) {
    console.log(` fictorial of ${xyz} is ${fictorialFinder(xyz)}`);
}