// const person = {
//     firstname: 'Muhammad',
//     lastname: 'Abubakar',
//     age: 26,
//     hobbies: ['listening Music', 'Playing cricket', 'Watching Movies'],
//     address: {
//         city: 'Daska',
//         state: 'Punjab',
//         country: 'Pakistan',
//     }
// }

// console.log("My name is " + person.firstname + ' ' + person.lastname + ' , my age is ' + person.age + ', my hobby is ' + person.hobbies[1] + ' and I live in city ' + person.address.city)
// console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out of Trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with the boss',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn JS',
        isCompleted: true,
    },
]

// console.log(todos[0].isCompleted)

// console.log(JSON.stringify(todos))

// for loop, while loop, to do loop

// for loop,
// for (let i = 0; i < 10;i++){
//     console.log(`For loop incremental numbers :${i}`)
// }

// // while loop,

// let i = 0;
// while (i < 10) {
//     console.log(`While loop incremental numbers :${i}`)
//     i++;
// }

// for (let i = 0; i < todos.length;i++){
//     console.log(`For loop incremental numbers for todos :${todos[i].text}`)
// }

// for (let todo of todos) {
//     console.log(todo.id)
// }

// forEach, map, filter

// forEach act as a for loop but it takes a function as its parameter, in which we need to pass variable
// todos.forEach(function (todo){
//     console.log("\n ID: ",todo.id)
//     return todo.id
// })

// map: it generates a new array from an existing array
// it works the same way as forEach does but it returns an array
// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText)

// filter: it filter specific values from an array
// it works the same way as map does and it also returns an array
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === false;
// });
// console.log(todoCompleted)

// filter the texts only whose values are true
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return [todo.text, todo.id, todo.isCompleted]
// })
// console.log(todoCompleted)


// turnery operations
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// // ? = then, : = else
// console.log("color: ", color)


// functions

// add nums
// function addNums(num1, num2) {
//     return num1 + num2;
// }

// x = addNums(3, 2);
// console.log("Number added :", x);


// using arrow functions

// multiply nums
// way 1
// const MulNums1 = (num1, num2) => {
//     const multiply = num1 * num2;
//     return multiply
// }

// x = MulNums1(3, 3);
// console.log("Number1 Multiplied :", x);
// // way 2
// const MulNums2 = (num1, num2) => num1 * num2;

// x = MulNums2(4, 7);
// console.log("Number2 Multiplied :", x);

// OOP
// function
// way 1
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // way 1
//     this.fullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     this.dateOfBirth = function () {
//         return this.dob;
//     }
//     // way 2
//     // Person.prototype.fullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
//     // Person.prototype.dateOfBirth = function () {
//     //     return this.dob;
//     // }
// }

// const person1 = new Person('Muhammad', 'Abubakar', '08-09-1995');
// const person2 = new Person('Fatima', 'Bibi', '05-03-1997');
// const person3 = new Person('Ayesha', 'Batool', '01-06-2000');
// const person4 = new Person('Usman', 'Ahmad', '08-010-2003');
// const person5 = new Person('Jawad', 'Ahmad', '26-02-2006');
// const person6 = new Person('Ali', 'Ahmad', '23-06-2009');
// console.log(person1);
// console.log(person1.dateOfBirth());

// console.log(person2.fullName());

// console.log(person3.fullName());

// console.log(person4.fullName());

// console.log(person5.fullName());

// console.log(person6.fullName());


// // way 2
// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     dateOfBirth(){
//         return this.dob.getFullYear()
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Muhammad', 'Abubakar', '08-09-1995');
// const person2 = new Person('Fatima', 'Bibi', '05-03-1997');
// const person3 = new Person('Ayesha', 'Batool', '01-06-2000');
// const person4 = new Person('Usman', 'Ahmad', '08-010-2003');
// const person5 = new Person('Jawad', 'Ahmad', '26-02-2006');
// const person6 = new Person('Ali', 'Ahmad', '23-06-2009');
// console.log(person1);
// console.log(person1.dateOfBirth());

// console.log(person2.fullName());

// console.log(person3.fullName());

// console.log(person4.fullName());

// console.log(person5.fullName());

// console.log(person6.fullName());


// JS DOM
// console.log(window)

// const form = document.getElementById('my-form');
// console.log(form)

// single element
// const query_selector = document.querySelector('h1'); //querySelector selector only one element at the same time if there are 10 hr tags, it only select first one.
// console.log(query_selector)

// multiple elements
// const query_selector_all = document.querySelectorAll('.item'); // it is recommended to use
// console.log(query_selector_all)
// const class_name = document.getElementsByClassName('item'); // it is recommended not to use
// console.log(class_name)

// const tag_name = document.getElementsByTagName('li');
// console.log(tag_name)

// const loop_through = document.querySelectorAll('.item');
// loop_through.forEach(function (item) {
//     console.log(item)
//     return item
// })

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Person 1';
// console.log(ul)

// ul.children[1].innerText = 'Person 2';
// console.log(ul)

// ul.lastElementChild.innerHTML = '<h1> Person 3 </h1>';
// console.log(ul)

const btn = document.querySelector('.btn');
// btn.style.background = 'green';
// btn.style.color = 'white';
// for hover, use event listner "mouseover"
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("Submit button clicked");
//     document.querySelector('#my-form').style.background = 'purple';
//     btn.style.background = 'green';
// })

// add a new user
const myForm = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
const namemsg = document.querySelector('.namemsg')
const emailmsg = document.querySelector('.emailmsg')
const emsg = document.querySelector('.emsg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);
email.addEventListener('blur', emailBlurValidation);
name.addEventListener('blur', nameBlurValidation);

function onSubmit(e) {
    e.preventDefault();
    if (name.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please fill the Name field first';
        setTimeout(function(){
            msg.remove()
        } , 2000);
        if (email.value === ''){
            emailmsg.classList.add('error')
            emailmsg.innerHTML = 'Please fill the Email field first';
            setTimeout(function(){
                emailmsg.remove()
            } , 2000);
        }
        
        
    } else if (email.value === ''){
        emailmsg.classList.add('error')
        emailmsg.innerHTML = 'Please fill the Email field first';
        setTimeout(function(){
            emailmsg.remove()
        } , 2000);
    }
    else if (name.value && email.value === ''){
        emailmsg.classList.add('error')
        emailmsg.innerHTML = 'Please fill the Email field first';
        setTimeout(function(){
            emailmsg.remove()
        } , 2000);
    }
    else if (name.value === '' && email.value){
        emailmsg.classList.add('error')
        emailmsg.innerHTML = 'Please fill the Name field first';
        setTimeout(function(){
            emailmsg.remove()
        } , 2000);
    }
    else {
        console.log("Success!")
        const users = document.createElement('li');
        users.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        userList.appendChild(users)

        // after submitting the successful form, clear the form fields
        name.value = '';
        email.value = '';
    }
    
}

function emailBlurValidation(e){
    console.log('\n Email event :', e.target.value)
    if (email.value === ''){
        emsg.classList.add('error')
        console.log('\n Email Value After class add :', email.value)
        emsg.innerHTML = "Email field can't be empty";
        console.log('\n emsg.innerHTML :', emsg.innerHTML)
        setTimeout(function(){
            emsg.remove()
        } , 2000);

    }
    // else if (email.value != ''){
    //     console.log('\n Email Value  :', email.value)
    //     emsg.classList.remove('error')

    // }
    // else if (email.value != ''){
    //     console.log('\n Email Value  :', email.value)
    //     emsg.classList.remove('error')

    // }

}

function nameBlurValidation(e){
    console.log('\n Name Event :', e.target)
    if (name.value === ''){
        console.log('\n Name Value :', name.value)
        namemsg.classList.add('error')
        namemsg.innerHTML = "Name field can't be empty";
        setTimeout(function(){
            namemsg.remove()
        } , 2000);
        // if (name.value != ''){
        //     console.log('\n Name Value :', name.value)
        //     namemsg.classList.remove('error')
    
        // }

    }
    // else if (name.value != ''){
    //     console.log('\n Name Value :', name.value)
    //     namemsg.classList.remove('error')

    // }
    // else {
    //     console.log('\n Name Value :', name.value)
    //     namemsg.classList.remove('error')

    // }

}