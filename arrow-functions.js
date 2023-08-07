/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

/* function addTwoNumbers(a, b) {
    //code block
    return a + b;
}


let sum = addTwoNumbers(3, 5);
console.log(sum); 
 */


// Arrow Function With Parameters

function addTwoNumbers(a, b) {
    //code block
    return a + b;
}


let sum = addTwoNumbers(3, 5);
console.log(sum); 


// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b
let sum2 = addTwoNumbers2(6, 2);
console.log(sum2);

const addTwoNumbers3 = (a, b) => (a + b)
let sum3 = addTwoNumbers2(15, 2);
console.log(sum3);
// Implicit Returns
const saySomething = message => console.log (message);
saySomething('Hello there!!');

const sayHello = () => console.log ('Hello');
sayHello();
// Returning Multiple Lines

const returnMultipleLines = () => (
    `this is a multiple lines string
    so we should remember to start with the
    back take key to start`
)
console.log(returnMultipleLines());

// Arrow function's first challenge//

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'cad');
console.log(' Cad ' +averageMarks);

let averageMarks1 = averagePoints(students, 'english');
console.log(' English ' + averageMarks1);

let averageMarks2 = averagePoints(students, 'maths');
console.log(" Maths "+ averageMarks2);

let averageMarks3 = averagePoints(students, 'science');
console.log(" Science "+ averageMarks3);

let averageMarks4 = averagePoints(students, 'art');
console.log(" Art "+ averageMarks4);

// spread operator //

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('second array:', arr2);
console.log('first array:', arr1);

// copying an array //
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);

console.log("third array:", arr3);
console.log("fourth array:", arr4);

// this syntax also works for copying the objects // copying an object //

let obj1 = {a : 1, b : 2, c : 3 };
let obj2 = {...obj1, d : 4};

console.log("First object:", obj1);
console.log("Second Object:", obj2);

// copying only part of array/object //

arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);


// *******2nd Challenge******///
// spread operator challenge ///

let students1 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];


let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);

console.log(students1[0]);

// functions using ...rest parameters

const sumAll = (a, b, c) => a + b + c;

let sumanother1 = sumAll(1, 2, 3);

console.log("sum:", sumanother1);

// Extra arguments are ignored //

let sumanother2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('sumanother2:', sumanother2);

// functions using the ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

return sum;
}

let sum4 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum4:", sum4);

// *******2nd Challenge******///
//********Rest parameter Challenge *//


let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, "h", "k", "g", "j", "i", "l"];

console.log(moreMixedLetters);

/* How i envision students doing this challenge 

const updateSortReverse =  (arr, ...letters) => {
    let copy = [...arr];
    for(let i of letters) {
        copy.push(i);
    }
    
    return copy.sort().reverse();
};
*/

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);


/* Destructuring arrays */

/********************/

/* regular arrays */

let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe);

/* destructured arrays */

/********************* */

let ages1 = [30, 26, 27];
let [john1, mary1, joe1]= ages1;
console.log(john, mary, joe);


/********************* */

/* Destructuring objects */

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

/********************* */

/* Destructuring subsets */


let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

/********************* */
/* skiping the values while Destructuring objects */


let [, , maryNative, marySecodary] = languages;
console.log(maryNative, marySecodary); 

/********************* */
/* Destructuring objects and subsets */


let languages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "German",
    fourthLanguage: "Japanese",
};

let {firstLanguage, thirdLanguage} = languages2
console.log(firstLanguage, thirdLanguage);


/********************* */
/* Destructuring / using rest parameters */

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others]=fruits;

console.log(favourite);
console.log(secondFavourite);
console.log(others);


/* another example */

let favouriteFoods = {
    brian: "Pizza",
    anna: "Pasta",
    sarah: "Vegetarian",
    andrea: "Steak",
};

let {brian, anna, ...rest}= favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);


/********************* */
/* map() method */

/* ******Example one ***/

//using the for loop//

let nums = [1, 2, 3, 4, 5];

let results = [];
for (let num of nums) {
    results.push(num * 2);

}

console.log(results);

// using map method //

const multiplyby2 = function (num){
    return num * 2;
}

const mapResults = nums.map(multiplyby2);
console.log(mapResults);

// simplified w /map()//

const simplified = nums.map(function (num){ return num * 2});

console.log(simplified);

// simplified + arrow functions. //

const arrow = nums.map(num => num * 2);
console.log(arrow);

// another interesting example //


const graduates = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const graduatesWithName = graduates.map(graduates => [ graduates.name, graduates.subjects]);
console.log(graduatesWithName);



// 2.filter() method // a simple example //

const allstudents = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        marks: 70,
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        marks: 80
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        marks: 90,
    }
];

const countMarks = allstudents.filter(person => person.marks >= 80);

console.log(countMarks);



// 2.filter() method // a specific one  ! example //

const adam = allstudents.filter(p => p.name === "Adam")[0];

console.log(adam);


// comlex example of using filter method //

const codingStudents = [

    {
        studentnumber: 1,
        name: "Kulwinder Singh",
        profession: "developer",
        skills: [
            { name: 'JavaScript', yearsExperience: 1},
            { name: 'Css', yearsExperience: 3},
            { name: 'html', yearsExperience: 5}
        ]
    },
    {
        studentnumber: 2,
        name: "Veer Singh",
        profession: "developer",
        skills: [
            { name: 'JavaScript', yearsExperience: 0},
            { name: 'Css', yearsExperience: 2},
            { name: 'html', yearsExperience: 4}
        ]

    },
    {
        studentnumber: 3,
        name: "Mimi Singh",
        profession: "developer",
        skills: [
            { name: 'JavaScript', yearsExperience: 1},
            { name: 'Css', yearsExperience: 5},
            { name: 'html', yearsExperience: 1}
        ]

    }
];

// const candidates = codingStudents.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yearsExperience >= 5);
//     return strongSkills.length > 0;
// } );

// console.log(candidates);


///.     or.    ..  //

// *********** It can also be written like this ********** //


const has5yearsExperience = skill => skill.yearsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExperience).length > 0;
const candidates = codingStudents.filter(hasStrongSkills);
console.log(candidates);


// filter method Challenge  ///

let challengeStudents = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = challengeStudents.filter(itm => itm.results.maths >= 90);
console.log(topMaths);


//.  ******************* Reduce Method ************************///

const numbers = [0, 1, 2, 3, 4];

let sum1 = numbers.reduce((acc, curr) => {

console.log(
    "Accumulator:", acc,
    "Cuurent Value:", curr,
    "Total:", acc + curr
);
return acc + curr;
});
console.log(sum1);



//2nd example it will run 5 times instead of 4///


const values = [0, 1, 2, 3, 4];

let sum5 = numbers.reduce((acc, curr) => {

console.log(
    "Accumulator:", acc,
    "Cuurent Value:", curr,
    "Total:", acc + curr
);
return acc + curr;
}, 0);
console.log(sum5);

// or it could be like this ///

const given = [0, 1, 2, 3, 4];

let sum6 = numbers.reduce((acc, curr) => {

console.log(
    "Accumulator:", acc,
    "Cuurent Value:", curr,
    "Total:", acc + curr
);
return acc + curr;
}, 10);
console.log(sum6);


//. Totaling a specific object property //

const teamMembers = [

    { 
        name: "Kulwinder Singh",
        profession: "developer",
        yearsExperience: 1
    },

    {
        name: "Veer Singh",
        profession: "developer",
        yearsExperience: 0

    },

    {
        name: "Mimi Singh",
        profession: "designer",
        yearsExperience: 1

    },
    {
        name: "Sameer Singh",
        profession: "designer",
        yearsExperience: 1

    },
    {
        name: "Sulakshna Singh",
        profession: "Manager",
        yearsExperience: 10

    }
];

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yearsExperience, 0);

console.log(totalExperience);

// Grouping by a property and totaling it too //
// {Devloper: , Designer: } <-- this is what I want //

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yearsExperience;
    } else {
        acc[key] += curr.yearsExperience; 
    };
    return acc;

},   {});

console.log(experienceByProfession);