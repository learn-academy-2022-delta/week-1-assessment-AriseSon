// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that taßkes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

const temp1 = 42
const temp2 = 350
const temp3 = 212

//------ I CREATED A FUNCTION CALLED boilingPoint... IT TAKES ANY GIVING NUMBER (temp)...

const boilingPoint = (temp) => {

//------ I CREATED if STATEMENTS TO DETERMINE IF THE NUMBER (temp) WAS AT BOILING POINT (temp3)... BELOW BOILING POINT (temp1)... AND AFTER BOILING POINT (temp2)... 
    
    if(temp === temp3) {
      return '212 is at boiling point'
    }
    else if(temp === temp1) 
    {
      return '42 is below boiling point'
    }
    else if(temp === temp2) 
    {
      return '350 is above boiling point'
    }
}
    console.log(boilingPoint(212))

    console.log(boilingPoint(42))

    console.log(boilingPoint(350))

//------ I USED THE TEST VARIABLES const temp1... const temp2... const temp3... MY OUTPUT WAS "42 is below boiling point", "350 is above boiling point" AND "212 is at boiling point"




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below.Create the code that will combine the two arrays and return the length using the variables provided below.Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//------ I CREATED A CODE THAT COMBINED THE TWO ARRAYS myNumbers1 = [3, 7, 0, 36, -9] AND myNumbers2 = [8, -7, 42, 9, 13] BY USING .concat... I NAMED THE COMBINED ARRAYS myNumbersOneTwo

myNumbersOneTwo = myNumbers1.concat(myNumbers2)
console.log(myNumbersOneTwo.length)

//----- I RETURN THE myNumbersOneTwo.length USING const myNumbers1 AND const myNumbers2... MY OUTPUT WAS 10




// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:


const currentCohort = "Delta 2022"

//------ I CREATED A FUNCTION CALLED reverseString THAT REVERSED THE LETTERS OF A STRING ("Delta 2022")

function reverseString(currentCohort) {

//------ I USED THE .spliT .reverse .join METHOD....  
    
    let splitString = currentCohort.split("")
    
    let reverseArray = splitString.reverse()

    let joinArray = reverseArray.join("")
    
    return joinArray
}
 
console.log(reverseString(currentCohort))

//----- I USED const currentCohort TO CREATE A FUNCTION CALLED reverseString(currentCohort)... I USED THE .spliT .reverse .join METHOD... console.log(reverseString(currentCohort))... MY OUTPUT WAS 2202 atleD





// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

const myArray = [13, 34, 5, 10, 27, 42]

//------ I CREATED A for LOOP THAT CAN EVALUATE WHETHER EACH NUMBER IN AN ARRAY myArray = [13, 34, 5, 10, 27, 42] IS EVEN OR ODD....
    
    for(let i = 0; i < myArray.length; i++) 

//----- I CREATED A if STATEMENT THAT WILL CHECK myArray FOR NUMBERS WITH NO REMAINDERS AND LOGGED THEM AS "even"... else "odd"....

        if(myArray[i] % 2 === 0) 
        console.log("even") 
        
        else 
            console.log("odd")
   
//----- MY OUTPUT WAS ODD EVEN ODD EVEN ODD EVEN

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24 

//----- I CREATED A FUNCTION THAT TAKE IN A SET setOne AND setTwo OF ANY TWO numbers....

let fourTwo = number2 - number1

let three = number3 - number4

//----- setOne TAKES number1 AND number2... return number2 AND number1 AND SUBTRACTS THE SMALLER number FROM THE LARGER number....

const setOne = (number1, number2) => {
return number2 - number1
}

//----- setTwo TAKES number3 AND number4... return number3 AND number4 AND SUBTRACTS THE SMALLER number FROM THE LARGER number....

const setTwo = (number3, number4) => {
    return number3 - number4
}

console.log(fourTwo)

console.log(three)

//----- MY OUTPUT WAS 42 AND 3








// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer:
// I THINK THE ANSWER IS TEN
// b) Verify and explain:
// AFTER THE CONSOLE LOG.... THE ANSWER IS 10.... I NOTICE THE .length PROPERTY ------L E A R N  2 0 2 2---- I COUNTED 10 SPACES... MY GUESS WAS CORRECT

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:
// I THINK THE ANSWER IS "O"
// b) Verify and explain:
// AFTER THE LOG.... THE ANSWER IS "O" ....[4] IS THE INDEX VALUE --------H E L L O--------- I COUNTED 4 SPACES (STARTING FROM 0)... MY GUESS WAS CORRECT 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
// I THINK THE ANSWER IS Ruby
// b) Verify and explain:
// AFTER THE LOG.... THE ANSWER IS Ruby ...."Javascript IS ZERO... "Ruby" IS ONE... "Rubyß" IS THE FIRST INDEX FOR THIS LIST OF STRINGS


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: I THINK THE ANSWER IS "SATURDAY" "SUNDAY"
// b) Verify and explain:
// AFTER THE LOG.... THE ANSWER IS "TypeError: weekendDays.toUpperCase is not a function"... I AM GOING TO FURTHER RESEARCH HOW TO USE THE UPPER CASE FOR THIS SITUATION

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:
// I THINK THE ANSWER IS "THREE"
// b) Verify and explain:
// AFTER THE LOG.... THE ANSWER IS number.... I WASNT FAMILIAR WITH THE typeof.... I AM GOING TO FURTHER RESEARCH typeof






// # ASSESSMENT 1: Tech Interview Practice Questions
// Answer the following questions.

// First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

// Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

// INSTRUCTOR EXAMPLE: What is a conditional statement?

//   Your answer: 
  
//   A conditional statement is a statement made using if, else, else if.

//   Researched answer:

//   Conditionals statements are commands for decision making. Conditionals perform multiple actions. A conditional statement is defined by if. The if function evaluate the statement, If the statement is related to the Boolean value of true, the relating code staement will be excuted.



// 1. What is git? What is the difference between git and Github?

//   Your answer:

//   Git is an oline open source used by programmers for sharing information. 

//   Researched answer:

//   Git is the local side of Github, git is managed on the user side. Its also referred to as VCS, it allow you to track changes, recall and use command line. Github is the server side, open sourced system greatly used in the programming field. Github is a powerful tool used for collaboration. This allow many people to contribute to the same code base.



// 2. Which JavaScript operators will return a Boolean value?

//   Your answer:

//   The Javascript operators that will return a Boolean value are true & false.

//   Researched answer:

//   The logical operator is typically used with boolean (logical) values. It returns a true value when suppossed too. If this operator is used with non-Boolean values, it will return a non-Boolean value.
  


// 3. What is an index? What is the difference between index and value?

//   Your answer: An index is the position on an array. The value is the Booleans, Strings, arrays and numbers.

//   Researched answer:

// The index indicates the position of the element within the array. (starting from 1) and is either a number or a field containing a number. Value is a javascript primitive type  meaning that each time a value is assigned, a copy of that value is created. 



// 4. What is iteration?

//   Your answer:

//   Iteration is the flow process of a loop.

//   Researched answer:

//   Iteration is the process of which the code segment is executed once. One iteration refers to 1-time execution of a loop. A loop can have many iterations.





// 5. Give a brief description of proper pair programming techniques. What are the roles of each person?

//   Your answer:

//   Proper pair programming techniques are communication and switching roles every 20 minutes. The roles of each person are; the driver and the navigator.

//   Researched answer:

//   The driver control the keyboard. Their role is to listen and log information while following the instructions given by the navigator. This technique requires constant communication. Talking about your code will make you a better developer and a great teammate. It is important to swop roles every 20-30 minutes and take frequent breaks.



// ## Looking Ahead: Terms for Next Week

// Research and define the following terms to the best of your ability.

// 1. Higher Order Functions:

// 2. Jest:

// 3. Objects:

// 4. Method:

// 5. Classes:
