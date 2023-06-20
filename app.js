
/*  .filter()
    Returns: A new array with only the filtered out items from the original array
    Purpose: Reducing a data set into a sub-data set.
        Ex: Initial array has all movies ( action, fantasy, horror )
            You could use filter to return an array with only the action movies.
            */


//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const numbers = [3, 6, 8, 2]

function fiveAndGreaterOnly(arr) {
    if(arr >= 5){
        return arr
    }
  }
const fiveAndUp = numbers.filter(fiveAndGreaterOnly)

console.log(fiveAndUp)

//Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    if(arr % 2 === 0){
        return arr
    }
  }

  const evens = numbers.filter(evensOnly)
  console.log(evens)

  //Given an array of strings, return a new array that only includes 
  //those that are 5 characters or fewer in length

  const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

  const fiveLetters = words.filter(word => word.length > 5)// start useing es6 syntax
  console.log(fiveLetters)

  //Given an array of people objects, 
  //return a new array that has filtered out all those who don't belong to the club.

   const belongTo = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const result = belongTo.filter(function belongs(array) {// you suck with es6// PRACTICE!!!
    if(array.member === true){
        return true
    }
})
console.log(result)

//Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const wantToSee = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const canSeeMatrix = wantToSee.filter(array => array.age > 18)// better.....
console.log(canSeeMatrix)