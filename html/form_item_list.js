let form_id = document.querySelector('#addForm')
let itemList = document.querySelector('#items')
let filterItem = document.querySelector('#filter')

form_id.addEventListener('submit', addFormItem);

itemList.addEventListener('click', removeItem);

filterItem.addEventListener('keyup', filterListItems);


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

function removeItem(event){
    if (event.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            let li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterListItems(event){
    let searchText = event.target.value.toLowerCase();

    let items = itemList.querySelectorAll('li');
    // converting in array first
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(searchText) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    })
}