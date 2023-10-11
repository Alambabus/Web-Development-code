const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const taskList = document.querySelector('.task-list');


btn.addEventListener('click', (e) => {
    // console.log(inp.value);
    const newItem = document.createElement('div');
    newItem.setAttribute('class', 'item');
    // console.log(newItem);

    let str = `<div class="section-A">
    <input class="checkbox" type="checkbox">
        <li class="text">${inp.value}</li>
    </div>

    <div class="section-B">
        <span class="up-arrow">⬆️</span>
        <span class="bin">🗑️</span>
        <span class="down-arrow">⬇️</span>
    </div>`;

    newItem.innerHTML = str;
    inp.value = "";
    taskList.append(newItem);
})

taskList.addEventListener('click', (e) => {
    // console.log(e.target);
    const element = e.target.getAttribute('class');
    // console.log(element);
    if (element === 'bin') {
        const item = e.target.parentElement.parentElement;
        item.remove();
    } else if (element === 'up-arrow') {
        const currItem = e.target.parentElement.parentElement;
        const preItem = currItem.previousElementSibling;
        preItem.before(currItem);
    } else if (element === 'down-arrow') {
        const currItem = e.target.parentElement.parentElement;
        const nextItem = currItem.nextElementSibling;
        nextItem.after(currItem);
    } else if (element === 'checkbox') {
        // console.log(e.target);
        const textItem = e.target.nextElementSibling;
        console.log(textItem);
        textItem.classList.toggle('checked');
    }
})