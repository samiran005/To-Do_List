/* ******************************************************* */
/* ******************************************************* */
//--> Main code for the todo list
function todoItem(title){
    const temp = {};
    temp.title = title;
    temp.status = 'No';

    return temp;
}

const todoText = document.querySelector('#todo-list');
const add = document.querySelector('#add');
const todoHolder = document.querySelector('.todo-holder');

const data = [];

function addItems(){
    if(todoText.value === '') return; //for not to add empty items in list
    data.push(todoItem(todoText.value));

    todoText.value = ''; //for empty the textArea for next items

    todoHolder.innerHTML = ''; //for clear the todoHolder before rerander using forEach
    data.forEach((todo)=>{
        todoHolder.innerHTML += `<div class="todo-items">
        <p>${todo.title}</p>
        <button class="done">Done</button>
    </div>`
    })
}

add.addEventListener('click', addItems);

/* ******************************************************* */
/* ******************************************************* */



// const arr1 = [1,2,3,5,9];
// const arr2 = arr1;
// console.log(arr1, arr2);

// arr1.push(55);
// console.log(arr1, arr2);


// const arr1 = [1,2,3,5,9];

// //primative way of copy an array 
// const arr3 = arr1.slice(0).concat([9,8,6]);
// console.log(arr1)
// console.log(arr3)

// arr1.push(99);

// console.log(arr1)
// console.log(arr3)

//concat : join two array
// const arr1 = [1,2]
// const arr2 = [6,9]

// const arr3 = arr1.concat(arr2);
// console.log(arr3);



// const arr = [9,6,7,4]

// //primative way of copy an array
// const newArr = [].concat(arr)

// console.log(arr)
// console.log(newArr)

// arr.push(66)

// console.log(arr)
// console.log(newArr)


// //'...' is spread operator
// const array = [8,9,7,6];

// const newArr = [...array];

// console.log(array, newArr);

// array.push(55);

// console.log(array, newArr);

//**** Objects ****
/*
1. Array is good but not sufficient for the real world data.
2. Object store key-value Pairs.
3. Objects don't have an index.
4. Referance Type
*/

// var somthing = 'nothing';

// console.log(window)

// function func1(){
//     console.log('hi there this is me !!')
// }
// func1();
// window.func1();

// const obj1 = {
//     name: 'samiran maity',
//     age: 23,
//     func(){
//         console.log('hi this is me !!!')
//     } 
// }

// obj1.func() 


// const obj2 = {
//     'full name': 'samiran maity',
//     func(){

//     }
// }

// console.log(obj2['name']);
// console.log(obj2['full name'])

//bracket notation --> obj2['name']
//dot notation --> obj2.name

// const obj5 = {name: 's', age: 5}

// console.log(obj5)

// obj5.name = 'samiran';

// console.log(obj5)

// const firstP = person('samiran', 35);

// console.log(firstP.name)

// const secondP = person('soma', 12);


// function person(name, age){
//     const temp = {}

//     temp.name = name;
//     temp.age = age;
//     temp.about = function(){
//         console.log('this is me !!');
//     }

//     return temp;
// }


// const firstP = 

// const obj = {
//     name: 'samiran',
//     age: 22
// }


// console.log(obj)

// obj.hobby = 'singing';
// obj.func = function(){
//     console.log('this is me !!');
// }

// console.log(obj)

// obj.func()

// function person(n, a){
//     const temp = {}
//     temp.name = n;
//     temp.age = a;
//     temp.about = function(){
//         console.log('hi there this is me !!');
//     }

//     return temp;
// }

// const firstP = person('soma', 22);
// // firstP.about();

// // console.log(person('samiran',23));

// const arr = [{id: 1},{id: 'hi'},{id: 3}];

// console.log(arr[1].id);

// const fullName = document.querySelector('#name');
// const age = document.querySelector('#age');

// const create = document.querySelector('#create');

// function person(name, age){
//     const temp = {}
//     temp.name = name;
//     temp.age = age;

//     return temp;
// }

// const data = [];

// create.addEventListener('click',()=>{
//     data.push(person(fullName.value, age.value))

//     console.log(data);
// })



