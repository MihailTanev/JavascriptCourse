/*
 * Variables and data types
 
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

/*
Variable mutation and type coercion


var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);
*/

/* Variable mutation 
age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/*
Basic Operators

var year, yearJohn, yearMark;
var now = 2018;
ageJohn = 28;
ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

/*
Logical Operators


var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");

var x;
console.log(typeof x);

/**
 * Operator precedence
var now = 2019;
var yearJohn = 1984;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;

/**
 * Multiple assignments
 
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

/*
 *More operators 

x = x * 2;
x *= 2;

x = x + 1;
x++;

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").


var massMark = 78;
var heightMark = 1.68;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's " + markHigherBMI);

/**
 * If-else statements

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will married soon");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will married soon");
}

/**
 * Boolean logic
var name = "Jim";
var ages = 16;
if (age < 16) {
  console.log(name + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(name + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(name + " is a man");
}

/**
 *Ternary Operator

var firstName = "Kim";
var age = 16;

age >= 18
  ? Console.log(firstName + " drink beer")
  : Console.log(firstName + " drink beer");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

/*
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}
*/

/**
 * Switch statement
var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids to core.");
    break;
  case "driver":
    console.log(firstName + " drives kids to school.");
    break;
  default:
    console.log(firstName + " does something else");
}

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK ðŸ˜€
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

/**
 * Functions

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var age = calculateAge(1984);
console.log(age);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1984, "Mihail");

/**
 * Function Statement and Expression
 

// function declaration
//function whatDodYouDo(job, firstName) {}

//function expression
var whatDodYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches how to code";
    case "driver":
      return firstName + " drives kids to school";
    default:
      return firstName + " some text";
  }
};

console.log(whatDodYouDo("teacher", "Mihail"));
*/

/**
 * Arrays
 * 
//Initialization
var names = ["One", "Two", "Three"];
var years = new Array(1990, 1969, 1948);

console.log(names.length);
console.log(names);
console.log(names[1]);

names[1] = "Example";
console.log(names);

//Different data types
var john = ["Tim", "Cage", 1984, "teacher", false];
john.push("blue");
john.unshift("Mr");
console.log(john);

john.pop();
console.log(john);

console.log(john.indexOf(1984));

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK ðŸ˜€
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/**
 * Objects and Properties
 */
