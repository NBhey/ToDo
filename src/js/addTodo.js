export default function addTodo(todolist, list) {
   
    let showTodo = ''
    if(todolist.length === 0) list.innerHTML = '';
    todolist.forEach((el,i) => {
        showTodo += `
        <li>
            <input type='checkbox' id='item_${i}' ${el.checked ? 'checked' : ''}>
            <label for='item_${i}' class='${el.important ? 'important' : ''}'>${el.todo}</label>
        </li>
        `
        list.innerHTML = showTodo
    });
}

