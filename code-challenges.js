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



