// Notes -- 4.7.25 

// let arr = new Array();
// // declaring an empty array 
// let arr2 = ["hello world", 200, true];
// // initializing array

// console.log(arr);
// console.log(arr2);
// // prints all the data of the array(s)

// console.log(arr2[0]);
// // prints hello world (since that is the value at index 0);

// arr2[1] = 100; 
// // changing arr2 at index 1's value to be 100

// console.log(arr2);
// console.log(arr2[1]);

// console.log("length of arr2: ", arr2.length); // Amount of elements in array 

// console.log("highest index in arr2: ", arr2.length - 1); // Highest index in array 

// console.log("last element in arr2: ", arr2[arr2.length - 1]); // Last element in array

// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits.length); // 3

// console.log(fruits[0]); // "Apple"
// console.log(fruits[1]); // "Orange"
// console.log(fruits[2]); // "Plum"

// console.log(fruits[fruits.length]); // will be undefined 



// Sarah's Grocery Store Inventory
// let groceryList = [];

// groceryList = ["Eggs", "Apples", "Milk", "Orange Juice", "Bread"];

// console.log(groceryList.length);

// groceryList[1] = null; 
// groceryList[3] = null; 

// groceryList.length = 7; 

// groceryList[5] = "Carrots";
// groceryList[6] = "Yogurt";

// console.log(groceryList);
// console.log(groceryList.length);



// Sarah's Grocery Store Shopping Cart 
// let shoppingCart = []; 

// shoppingCart.push("Milk", "Bread", "Eggs"); 
// console.log(shoppingCart);

// let eggs = shoppingCart.pop();

// console.log(shoppingCart);
// console.log(eggs);



// Break down the For Loop 
let sampleArr = [1, 2, 3, 4, 5];

for (let i = 0; i < sampleArr.length; i++) {
    console.log(`Initialized value is ${sampleArr[i]}`);
    if (i == sampleArr.length-1) {
        console.log('Condition is not met!');
    } else {
        console.log('Condition is met!');
        console.log(`After iterator, initialized value is ${sampleArr[i+1]}`);
    }
}