// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var divByThree = function(num){
	if(num % 3 === 0){
		return num + " is divisible by three."
	} else {
	} return num + " is not divisible by three."
}

console.log(divByThree(90))
// // 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var justin = {
	age: 33,
	hair: "black",
	favSport: "soccer",
	favInstrument: "guitar",
}

console.log(justin.age);
console.log(justin)

// // 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var arry = [ "George", "Paul", "John", "Ringo" ]
var newArry = []

newArry.push(arry[2], arry[3])
console.log(newArry)

console.log(arry[3], arry[0]);


// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.
// // Input:"hooplah"
// // Output:"ahhloop"

var word = "hooplah"
var word2 = "pneumonoultramicroscopicsilicovolcanoconiosis"
var word3 = "Shouldn\'t"

function alphabetSoup(str) {
//Created a variable that splits, sorts the letters in alphabetical order and joins the string back together
	var newStr = str.split("").sort().join("")
	return newStr

}
console.log(alphabetSoup(word))
console.log(alphabetSoup(word2))
console.log(alphabetSoup(word3))
// // keep this function call here
//
// alphabetSoup(readline())
//
// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var emptyArr = []

function locateDataIndex(ind1, ind2){
	for(let i = 0; i = nums.length; i++){
	return nums[ind1] + " " + nouns[ind2]
	}
}
console.log(locateDataIndex(0, 0));
console.log(nums[0], nouns[0]);


// output of the first function should be: "1 ducks"
