// const arr1 = [1,2,3,5,9];
// const arr2 = arr1;
// // console.log(arr1, arr2 );
// arr1.push(55);
// // // console.log(arr1, arr2 );
// // /* Primetive way to copy an array*/
// const arr3 = arr1.slice(0).concat(2,6,8,9);
// console.log(arr3);
// arr1.push(99);
// console.log(arr1);
// console.log(arr3);

// /*** concat is used to join two array */
// const arr1 = [1,3,5];
// const arr2 = [5,3,1,8];
// // const arr3 = arr1.concat([8,5,9,4]);
// const arr3 = [5,9,6].concat(arr2);
// const arr3 = [5,9,6].concat(arr2,0,6,9);


// console.log(arr3); 

// primetive way to copy an array
// const arr1 = [1,3,5];
// const newarr = [].concat(arr1);
// console.log(arr1);
// console.log(newarr);
// arr1.push(55);
// console.log(arr1);
// console.log(newarr);
// '...' is spread operatotr ()
// const arr1 = [8,9,7,6];
// const newArr = [1,1,2,...arr1,8,7]; // Spread operator (...)
// console.log(arr1, newArr);
// arr1.push(55);
// console.log(arr1, newArr);
/* ****OBJECT**** */
/*1. array is good but not sufficient for the real world Data
2. Object store key-value pairs
3. Object don't have an index
4. Reference type
5. we can't use arrow function in object */

// const obj1 = {
// name: 'soma chitrakar', // data "obj works on key value"
// age: 22, // data
// func(){ // method
// console.log('hi dear this is me !!!!!!!!')
// }
// }
// // // console.log(obj1.name);// call by dot notatiom
// // // console.log(obj1.age);
// // // console.log(obj1);
// console.log(obj1['name']);// call by bracket notation
// console.log(obj1['age']);

// obj1.func();
// function func1()
// {
//     console.log('hi dear this is me');
// }
// func1();
// window.func1();
// const obj1 = {
// 'full name': 'soma chitrakar', // data "obj works on key value"
// age: 22, // data
// func(){ // method
// console.log('hi dear this is me !!!!!!!!')
// }
// }
// console.log(obj1['full name'])
/*** After create a function , we want to return an object through the function call by passing arguments***/
// function person(name,age){
//     const temp = {}
//     temp.name = name; // key value
//     temp.age = age;  // key value
//     temp.about = function()
//     {
//         console.log('this is me !!!!!!!!');
//     }
//     return temp;
// }
// console.log(person('soma',22)); // call whole object value
// const firstp = person('samiran',23);
// firstp.about();
// person('soma',22);
/***-----------------------------------------------------------------------------------------------------------***/
// const obj = {
//     name: 'soma',
//     age: 22
// }

// console.log(obj)
// /**** we can add more properties & also method through like below**** */
// obj.hobby = 'singing';
// obj.func = function(){
//     console.log('this is me!!!!!!!!!!!');

// }
// console.log(obj);
// obj.func();
// const arr =n[{id: 1},{id: 'hi'},{id: 3}];
const fullname = document.querySelector('#name');
const age = document.querySelector('#number');
const btn = document.querySelector('.submit');
// console.log(fullname,age,submit);
function person(name,age){
    const temp = {}
    temp.name = name,
    temp.age = age
    return temp;

}
const data = [];
btn.addEventListener('click',()=>{
    // console.log(fullname.value);
    // console.log(age.value);
    // let name = fullname.value;
    // let age = number.value;
    data.push(person(fullname.value,age.value));
    console.log(data);


})