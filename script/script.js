/*
About project:In this project, we wrote some simple  HTML code using JavaScript, Which creats a nimber of div element in out index page and uses
Developer: Shayan Mahmoudi
Date start: 1/12/2024
Date end: 1/13/2024
Teacher: Mr.Khateri
E-mail: unkshayan@gmail.com
Github: shayanUNK
*/

let container = document.createElement('div');
container.setAttribute("class", "container");

let items1 = document.createElement('div');
items1.setAttribute("class", "items")

let rectangle = document.createElement('div');
rectangle.setAttribute("class", "rectangel");
let square = document.createElement('div');
square.setAttribute("class", "square");

items1.appendChild(rectangle);
items1.appendChild(square);

let items2 = document.createElement('div');
items2.setAttribute("class", "items");

for (let i = 0; i < 6; i++) {
    let littleItem = document.createElement('div');
    littleItem.className = 'little-item';
    items2.appendChild(littleItem);
}

container.appendChild(items1);
container.appendChild(items2);

document.body.appendChild(container);