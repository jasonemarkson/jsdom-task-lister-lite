const newTaskDescription = document.getElementById('new-task-description')
const newTaskForm = document.getElementById('create-task-form')
const taskList = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  newTaskForm.addEventListener('submit', addTaskToList)

});

function addTaskToList(e) {
  e.preventDefault()
  taskList.innerHTML += `<li> ${newTaskDescription.value} <button data-description=${newTaskDescription.value}>Delete</button></li>`
  newTaskDescription.value = ""
}
