// event listeners

// old way

// Events
// function clickButton(event){
//     console.log('\n Adding event listener')
    // document.querySelector('#form-id').textContent = 'Item Add';
    // document.querySelector('#form-id').style.color = 'yellow';
    // document.querySelector('#form-id').style.marginLeft = '90px';
    // document.querySelector('#outer-div').style.backgroundColor = 'green';
    // console.log('\n Event ', event.target)
    // console.log('\n Event ID ', event.target.id)
    // console.log('\n Event Class ', event.target.className)
    // let id = document.querySelector('#buttonn')
    // id.innerHTML = 'Hey Abubakar'

    // console.log('\n Mouse clicked on window dimension horizontally ', event.offsetX)
    // console.log('\n Mouse clicked on window dimension vertically ', event.offsetY)
    // console.log('\n Holding Alt key? ', event.altKey)
    // console.log('\n Holding Shift key? ', event.shiftKey)
    // console.log('\n Holding Ctrl key? ', event.ctrlKey)


// }

// my own way
// let button_id = document.querySelector('#button');
// button_id.addEventListener('click', clickButton);

// // new way
// let button_id = document.querySelector('#button');
// button_id.addEventListener('click', function(){
    // console.log('\n Button clicked using a new way.')
    // console.log('\n Adding event listener')
    // document.querySelector('#form-id').textContent = 'Item Add';
    // document.querySelector('#form-id').style.color = 'yellow';
    // document.querySelector('#form-id').style.marginLeft = '90px';
    // document.querySelector('#outer-div').style.backgroundColor = 'green';
    // console.log('\n Event ', event.target)
    // console.log('\n Event ID ', event.target.id)
    // console.log('\n Event Class ', event.target.className)
    // let id = document.querySelector('#buttonn')
    // id.innerHTML = 'Hey Abubakar'

    // console.log('\n Mouse clicked on window dimension horizontally ', event.offsetX)
    // console.log('\n Mouse clicked on window dimension vertically ', event.offsetY)
    // console.log('\n Holding Alt key? ', event.altKey)
    // console.log('\n Holding Shift key? ', event.shiftKey)
    // console.log('\n Holding Ctrl key? ', event.ctrlKey)

// });


// 
let button_id = document.querySelector('#button');
let select_id = document.querySelector('#select_id');
let formInput = document.querySelector('#item_name');
let form = document.querySelector('form');
// button_id.addEventListener('click', runEvent);
// button_id.addEventListener('dblclick', runEvent);

// button_id.addEventListener('mousedown', runEvent);
// button_id.addEventListener('mouseup', runEvent);
// button_id.addEventListener('mouseenter', runEvent);
// button_id.addEventListener('mouseleave', runEvent);
// button_id.addEventListener('mouseover', runEvent);
// button_id.addEventListener('mouseout', runEvent);
// button_id.addEventListener('mousemove', runEvent);

// formInput.addEventListener('keydown', runEvent);
// formInput.addEventListener('keyup', runEvent);
// formInput.addEventListener('keypress', runEvent);

// keyfocus can be used to validate the input fields when it is required. e.g a user clicks in input but doesn't fill anything and comes out. show error message
// formInput.addEventListener('keyfocus', runEvent);

// keyblur can be used to validate the input fields when it is required. e.g a user clicks in input but doesn't fill anything and comes out from input field. show error message
// formInput.addEventListener('keyblur', runEvent);


// formInput.addEventListener('cut', runEvent);
// formInput.addEventListener('paste', runEvent);

// formInput.addEventListener('input', runEvent);

// select_id.addEventListener('change', runEvent)
// form.addEventListener('submit', runEvent)

function runEvent(event){
    event.preventDefault();
    console.log('Event type :', event.type)
    // it will show the mouse movement on button
    // buttonn.innerHTML = '<h3> MouseX :' + event.offsetX + '</h3><h3>MouseY :'+event.offsetY + '<h3>';

    // it will change the colors of the button upon moving the mouse over button
    // button_id.style.backgroundColor = "rgb("+event.offsetX + "," + event.offsetY + ", 40)";

    // it will chnge the color of the whole body upon moving the mouse on button
    // document.body.style.backgroundColor = "rgb("+event.offsetX + "," + event.offsetY + ", 40)";

    // it will collect the key board struck
    buttonn.innerHTML = "<h3>"+ event.target.value +"</h3>";
}