// function logger() {
//     console.log('My name is Jonas')
// }
// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples,oranges);
//     const juice = `juice with ${apples} apples and ${oranges} orange.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(2,4));

// function calcAge1(birthYear) {
//     return birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2021-birthYear;
// }
// console.log(calcAge2(calcAge1(1991)));

// const calcAge3 = birthYear => 2021 -birthYear;
// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     const person = `${firstName} was ${retirement} year left to 65`;
//     return person;
// }
// const yearResult = yearsUntilRetirement(1991, 'Jack');
// console.log(yearResult);
// function cutFruitPiceces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, age) {
// const applePieces = cutFruitPiceces(apples);
//     const orangePieces = cutFruitPiceces(age);

    
//     const juice = `juice with ${applePieces} apples and ${orangePieces} orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    const average = (scoreOne + scoreTwo + scoreThree)/3;
    return average;
}
let averageScoreDolphin = calcAverage(85, 54, 41);
let averageScoreKoalas = calcAverage(23, 34, 27);

console.log(averageScoreDolphin);
console.log(averageScoreKoalas);
const checkWin = (nameOne,numOne, nameTwo, numTwo) => {

        if (numOne/2 > numTwo) {
            return `${nameOne} is Win`
        }
    else if (numTwo/2 > numOne) {
            return `${nameTwo} is Win`
        }
    
    else return `no team is win`;
}
console.log(checkWin("dolphin",averageScoreDolphin,"Koalas",averageScoreKoalas));
