let addMessage = document.querySelector('.input-title'),
    addButton = document.querySelector('.add-task'),
    todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    showMessages();
};

addButton.addEventListener('click', function () {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
    };

    todoList.push(newTodo);
    showMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function showMessages() {
    let showMessage = "";
    todoList.forEach(function (item, i) {
        showMessage += `
        <li>
        <input type= 'checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label for= 'item_${i}'>${item.todo}</label>
        </li>`;
        todo.innerHTML = showMessage;
    })
};

todo.addEventListener('change', function (event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function (item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
});