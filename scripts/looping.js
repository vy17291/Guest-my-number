/*
for (let rep = 1; rep <=5; rep++) {
    console.log(rep);
}
let rep = 5;
while (rep >= 0) {
    console.log(rep);
    rep--;
}  
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
let count = 0;
while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    count++;
    console.log(`${count}. You rolled a ${dice}`);
    if (dice === 6) console.log('loop is about to end...');
    if (count >= 7) {
        console.log(`It ${count} times`);
        break;
    }
}*/

const calcAverage = (array) => {
    let sum = 0;
    for (let i = 0; i< array.length; i++) {
        sum += array[i];
    }
    console.log(`The array has ${array.length} number and sumary is ${sum}`);
    return sum/array.length;
};
let array = [1,2,3,4,5,6,7,8,9];
console.log(calcAverage(array));