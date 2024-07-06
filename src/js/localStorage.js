export default function saveData(list) {
    localStorage.setItem('todo', JSON.stringify(list));
}

