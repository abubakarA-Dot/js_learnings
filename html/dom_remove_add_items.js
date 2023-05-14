// event listeners

// old way
function clickButton(){
    console.log('\n Adding event listener')
    document.querySelector('#form-id').textContent = 'Item Add';
    document.querySelector('#form-id').style.color = 'yellow';
    document.querySelector('#form-id').style.marginLeft = '90px';
    document.querySelector('#outer-div').style.backgroundColor = 'green';
}

// my own way
let button_id = document.querySelector('#button');
button_id.addEventListener('click', clickButton);

// // new way
// let button_id = document.querySelector('#button');
// button_id.addEventListener('click', function(){
//     console.log('\n Button clicked using a new way.')
// });