document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset()
  })
})

function buildToDo(todo) {
  let todoList = document.querySelector('#tasks');
  let todoActivity = document.createElement('li');
  let deleteBtn = document.createElement('button');
  deleteBtn.addEventListener('click', handleDelete);
  todoActivity.textContent = `${todo} `;
  deleteBtn.textContent = ' x ';
  todoActivity.appendChild(deleteBtn);
  todoList.appendChild(todoActivity);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
