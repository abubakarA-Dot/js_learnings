const person = {
    firstname: 'Muhammad',
    lastname: 'Abubakar',
    age: 26,
    hobbies: ['listening Music', 'Playing cricket', 'Watching Movies'],
    address: {
        city: 'Daska',
        state: 'Punjab',
        country: 'Pakistan',
    }
}

console.log("My name is " + person.firstname + ' ' + person.lastname + ' , my age is ' + person.age + ', my hobby is ' + person.hobbies[1] + ' and I live in city ' + person.address.city)
console.log(person)

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

console.log(todos[0].isCompleted)

console.log(JSON.stringify(todos))

// for loop, while loop, to do loop

// for loop,
for (let i = 0; i < 10;i++){
    console.log(`For loop incremental numbers :${i}`)
}

// // while loop,

let i = 0;
while (i < 10) {
    console.log(`While loop incremental numbers :${i}`)
    i++;
}

for (let i = 0; i < todos.length;i++){
    console.log(`For loop incremental numbers for todos :${todos[i].text}`)
}

for (let todo of todos) {
    console.log(todo.id)
}

// forEach, map, filter

// forEach act as a for loop but it takes a function as its parameter, in which we need to pass variable
todos.forEach(function (todo){
    console.log(todo.id)
})

// map: it generates a new arry from an existing array
// it works the same way as forEach does but it returns an array
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText)

// filter: it filter specific values from an array
// it works the same way as map does and it also returns an array
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === false;
});
console.log(todoCompleted)

// filter the texts only whose values are true
const todoCompletedTrue = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text
})
console.log(todoCompletedTrue)