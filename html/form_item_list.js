let form_id = document.querySelector('#addForm')
let itemList = document.querySelector('#items')

form_id.addEventListener('submit', addFormItem);


function addFormItem(event){
    event.preventDefault()
    console.log('\n Submit event listener working');
    let newItem = document.querySelector('#item');
    let item = newItem.value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    item = document.createTextNode(item);
    li.appendChild(item);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
    itemList.appendChild(li);
}