/* Lesson 2 */

/* VARIABLES */

let userName;

let currentYear;

let pictureName;

// Step 1: declare and instantiate a variable to hold your name

userName = "Lynn Tanner Elliott"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.getElementById("name").innerHTML = userName;

// Step 3: declare and instantiate a variable to hold the current year

currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file

document.getElementById("year").innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture

pictureName = "images/me.jpg";

// Step 6: copy your image into the "images" folder

document.querySelector("#photo").setAttribute("src",pictureName)

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())




/* ARRAYS */

let favoriteFood1;

let favoriteFood2;

let favoriteFoods;

// Step 1: declare and instantiate an array variable to hold your favorite foods

favoriteFood1 = ["Chicken", "Potatoes", "Green Beans"];

// Step 2: place the values of the favorite foods variable into the HTML file

document.getElementById("food").innerHTML = favoriteFood1;

// Step 3: declare and instantiate a variable to hold another favorite food

favoriteFood2 = "Rice Pilaf";

// Step 4: add the variable holding another favorite food to the favorite food array

favoriteFoods = favoriteFood1.concat(favoriteFood2);

// Step 5: repeat Step 2

document.getElementById("food").innerHTML = favoriteFoods;

// Step 6: remove the first element in the favorite foods array

favoriteFoods.splice(0,1);

// Step 7: repeat Step 2

document.getElementById("food").innerHTML = favoriteFoods;

// Step 8: remove the last element in the favorite foods array

favoriteFoods.splice(2,1);

// Step 7: repeat Step 2

document.getElementById("food").innerHTML = favoriteFoods;


