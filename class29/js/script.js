const abc = (key) => {
    switch (key) {
        case 1:
            return ('1');
        case 2:
        case 4:
        case 5:
            return ('2');
        case 3:
            return ('3');
        default:
            return ('default');
    }
}

// if(abc(5)==2){
//     console.log('Hamza');
// }
// else{
//     console.log("manzoor");
// }
console.log(abc(5) == 2 ? "Hamza" : "Manzoor");
// condition?true:false

// *
// **
// ***
// ****
// *****
let a = 20  // a=20 age=undefined
let age = 25  //a=20 age=25
age = (age++) + (a++)  //age=45 a=21
a = (++age) - (++a)   // a=24 age=46
age = (++age) - (++a) //age=22 a=25
a+=1 // a=a+1
console.log(age, a);


for (let i = 0; i < 100; i++) {
    console.log("");

}