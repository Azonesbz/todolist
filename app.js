const btnAddTask = document.getElementById('btn-add-task')
const inputTask = document.getElementById('input-task-value')
const tableTask = document.getElementById('table-task')


btnAddTask.addEventListener('click', () => {
    let inputTaskValue = inputTask.value
    console.log(inputTaskValue)
    const tr = document.createElement('tr')
    const btnDelete = document.createElement('button')
    const btnEdit = document.createElement('button')
    const btnSave = document.createElement('button')
    const btnFinish = document.createElement('button')
    const newTask = tableTask.appendChild(tr)
    newTask.appendChild(btnDelete, btnEdit, btnSave, btnFinish)



})