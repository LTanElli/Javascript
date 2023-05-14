/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// let info = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// let info = {
//     name: "Lynn"
// }

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

//all of this can be put into step 4 to make it easier



// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )


let info = {
    name: "Lynn",
    photo: "images/me.jpg",
favoriteFoods: [
    "Funeral Potatoes",
    "Cheeseburger",
    "Brisket",
],


// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

myHobbies: [
    "Video Games",
    "Mountain Biking",
    "Gym",
]
};

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

info.placesLived = [
    {
        place: "Safford, AZ",
        length: "0.5 years",
    },
    {
        place: "Reno, NV",
        length: "2.5 years",
    },
    {
        place: "Cedar City, UT",
        length: "9 years",
    },
    {
        place: "Prescott, AZ",
        length: "8 years",
    },
    {
        place: "Rexburg, ID",
        length: "0.5 years",
    },
]

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.querySelector("#name").textContent - info.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector("#photo").setAttribute("src", info.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.querySelector("#photo").setAttribute("alt", info.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

info.favoriteFoods.forEach((food) => {
    let favoriteFoodElem = document.createElement("li");
    favoriteFoodElem.textContent = food;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    
document.querySelector("#favorite-foods").appendChild(favoriteFoodElem);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property

info.myHobbies.forEach((hobby) => {
    let hobbyElem = document.createElement("li");
    hobbyElem.textContent = hobby;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

    document.querySelector("#hobbies").appendChild(hobbyElem);
});



// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

info.placesLived.forEach((placeLived) => {
   let placesLivedPlace = document.createElement("dt");
   placesLivedPlace.textContent = placeLived.place;
   
   let placesLivedLength = document.createElement("dd");
   placesLivedLength.textContent = placeLived.length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

   document.querySelector("#places-lived").appendChild(placesLivedPlace);
   document.querySelector("#places-lived").appendChild(placesLivedLength);
});


