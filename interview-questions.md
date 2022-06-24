# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer: 
  
  A conditional statement is a statement made using if, else, else if.

  Researched answer:

  Conditionals statements are commands for decision making. Conditionals perform multiple actions. A conditional statement is defined by if. The if function evaluate the statement, If the statement is related to the Boolean value of true, the relating code staement will be excuted.



1. What is git? What is the difference between git and Github?

  Your answer:

  Git is an oline open source used by programmers for sharing information. 

  Researched answer:

  Git is the local side of Github, git is managed on the user side. Its also referred to as VCS, it allow you to track changes, recall and use command line. Github is the server side, open sourced system greatly used in the programming field. Github is a powerful tool used for collaboration. This allow many people to contribute to the same code base.



2. Which JavaScript operators will return a Boolean value?

  Your answer:

  The Javascript operators that will return a Boolean value are true & false.

  Researched answer:

  The logical operator is typically used with boolean (logical) values. It returns a true value when suppossed too. If this operator is used with non-Boolean values, it will return a non-Boolean value.
  


3. What is an index? What is the difference between index and value?

  Your answer: An index is the position on an array. The value is the Booleans, Strings, arrays and numbers.

  Researched answer:

The index indicates the position of the element within the array. (starting from 1) and is either a number or a field containing a number. Value is a javascript primitive type  meaning that each time a value is assigned, a copy of that value is created. 



4. What is iteration?

  Your answer:

  Iteration is the flow process of a loop.

  Researched answer:

  Iteration is the process of which the code segment is executed once. One iteration refers to 1-time execution of a loop. A loop can have many iterations.





5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

  Proper pair programming techniques are communication and switching roles every 20 minutes. The roles of each person are; the driver and the navigator.

  Researched answer:

  The driver control the keyboard. Their role is to listen and log information while following the instructions given by the navigator. This technique requires constant communication. Talking about your code will make you a better developer and a great teammate. It is important to swop roles every 20-30 minutes and take frequent breaks.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:

Higher Order Functions are functions that can take at least three other functions as arguments. They can also return another function as an output. .map() & .filter() both have three build in parameters, the value, index & array.  

2. Jest:

Jest is a Javascript testing framework. Jest requires a describe method, a test method nested within that describe block & at least one expect method nested within the test's block. After invoking the describe method, test method & expect method, yarn jest will fail since we havent created the function yet. 

3. Objects:

Objects are collections of key:value pairs stoed in curly braces. The key = data type of symbol. The value = any valid data type in JS. EX name: "Ricky Fort"

Objects can contain functions, that function is called a Method .this is a JS keyword that reference the object. EX this.name

Objects can be single indexes of an array. .map() or .filter() can be use on objects in arrays. EX name = people.filter(value => value.name === "Ricky Fort")

Objects Destructuring is the proccess of taking the properties of an object and putting them into individual variables. 
EX 
const person = {
      firstName: "Ricky",
      lastName: "Fort"
     }

4. Method:
When a function belong to an object its called a method.
EX 
const person = {
      firstName: "Ricky",
      lastName: "Fort",
      getData: function() {
        return '${this.firstName}' last name is ${this.lastName}
      }
    }
 It can be used to display the value in the return statement

5. Classes:

Classes are a type of function that contain data and behavior. Like functions, classes have their own scope. Constructor, this:, & new are JS keywords used to create and access information within the class.
Ex
class Ricky {
  constructor(){
    this.kidCount = 3

const daddy = new Ricky()    
  }
}

Constructor is a method for creating & initializing objects. this: is a JS keyword that refer to the objects it belong to. new is used when creating a new instance of a class.


