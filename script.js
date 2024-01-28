
// creat text inside a p tag
// document.getElementById('para').innerHTML = 'This is a p tag.';


// create new element (h1 tag) inside HTML body
        // let hElement = document.createElement('h3');
// console.log(hElement);       // to see h1 tas is created or not 

// now creating text inside the h1 tag
        // hElement.innerHTML = 'This is DOM showing in browser.';


// now planting h1 text inside body tag
        // document.body.appendChild(hElement);


// Starting Home Work Here !!!!

let hElement = document.createElement('h1');                               // creating h1 tag
hElement.innerHTML = '1. Success to Created Heading inside a Section Tag.';   // inserting text inside h1 tag

let sectionElement = document.querySelector('.box_1');          // selecting section
let spanElement = document.querySelector('.box_2');             // selecting span

sectionElement.insertBefore(hElement, spanElement);             // now planting the hElement


// creating second element 
let pElement = document.createElement('p');                     
pElement.innerHTML = '2. Success to create second p tag';
let element = document.querySelector('.box_3');
sectionElement.insertBefore(pElement, element);


// creating third element
let thirdElement = document.createElement('h2');
thirdElement.innerHTML = '3. Success to create third element.';
document.body.appendChild(thirdElement);


// let hElement = document.querySelector('.box_2');
// hElement.insertBefore(hElement, spanElement);

