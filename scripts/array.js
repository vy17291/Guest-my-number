/*const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2007, 2020);

const jonas = ['Jonas', 'Schedtmann', '2037 - 1991', 'teacher', friends,years];
console.log(jonas, jonas.length);

const calsAge = function(birthYear) {
    return 2037 - birthYear;
}
//console.log(calsAge(years[1]));
//console.log(calsAge(jonas[jonas.length-1][2]));

//add to array
friends.push('Jay');
friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //last
friends.shift(); //first
console.log(friends);

//index of
console.log(friends.indexOf('Steven'));

//include
console.log(friends.includes('Steven'));
console.log(friends.includes('Bobs '));
if (friends.includes('Peter')) {
    console.log('You have a friend call Peter');
};

//challenge
const bills = [125, 555, 44,100,900,200,400];
// function calcTip(bill) {
//     if (50<bill<300) {
//         return bill*15/100;
//     } else {
//         return bill*20/100;
//     }
// };
 const calcTip = bill => bill >= 50 && bill <=300  ? bill * 0.15 : bill * 0.2;

let tips = [];
let total = [];
for (var i=0; i<bills.length;i++) {
    let bill = bills[i];
    let tip = calcTip(bill);

    tips.push(tip);
    console.log(tips[i]);
    total.push(tip+bill);
}
console.log(bills);
console.log(tips);
console.log(total);

*/

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1991,
    job : 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,
    // calcAge: function(birthYear) {
    //     return 2037-birthYear;
    // }
    // calcAge: function() {
    //   //  console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    /*checkDriver: function() {
        if (this.hasDriverLicense) {
            console.log(`${this.firstName} has driver license  he's ${this.calcAge()} year's old`);
            return this.canDrive = true;
        } else {
            console.log(`${this.firstName} has no driver license even he's ${this.calcAge()} year's old`);
            return this.canDrive = false;
        }
    } */
    getSumary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }

};
/* console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

const interested = prompt('What do you want to know about Jonas?');
if (jonas[interested]) {
    console.log(jonas[interested]);
} else {
    console.log('Wrong request!')
}
*/
// console.log(jonas.calcAge(1992));
// console.log(jonas['calcAge'](1991)); 
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.checkDriver());
jonas.job = 'worker';
jonas.hasDriverLicense = true;

console.log(jonas.getSumary());
console.log(jonas);

const Mark = {
    fullName: 'Mark Jucke',
    height: 1.69,
    weight: 78,
    calcBmi : function() {
        return this.weight/(this.height ** 2).toFixed();
    }
};
const John = {
    fullName: 'John Cena',
    height: 1.95,
    weight: 92,
    calcBmi : function() {
        return this.weight/(this.height ** 2).toFixed();
    },
    resultBmi: function() {
        return `${this.fullName} BMI ${this.calcBmi()} is ${this.calcBmi()>Mark.calcBmi() ? 'higher' : 'lower'} than ${Mark.fullName}. `
    }
};
console.log(Mark.calcBmi(), John.calcBmi());
console.log(John.resultBmi());
