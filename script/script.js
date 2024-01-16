/*
About project:In this project, we wrote some simple  HTML code using JavaScript, Which creats a nimber of div element in out index page and uses
Developer: Shayan Mahmoudi
Date start: 1/12/2024
Date end: 1/13/2024
Teacher: Mr.Khateri
E-mail: unkshayan@gmail.com
Github: shayanUNK
*/

// create a div element
let container = document.createElement('div');
// giving class to the div element
container.setAttribute("class", "container");

// create a div element
let items1 = document.createElement('div');
// giving class to the div element
items1.setAttribute("class", "items")

// create a div element
let rectangle = document.createElement('div');
// giving class to the div element
rectangle.setAttribute("class", "rectangle");

// create a div element
let square = document.createElement('div');
// giving class to the div element
square.setAttribute("class", "square");

// create a div element
let test = items1.appendChild(rectangle);
console.log(test);
// giving class to the div element
items1.appendChild(square);

// create a div element
let items2 = document.createElement('div');
// giving class to the div element
items2.setAttribute("class", "items");

// create sxx div element to prevent additional code
for (let i = 0; i < 6; i++) {
    let littleItem = document.createElement('div');
    littleItem.setAttribute("class", "little-item");
    items2.appendChild(littleItem);
}

container.appendChild(items1);
container.appendChild(items2);

document.body.appendChild(container);