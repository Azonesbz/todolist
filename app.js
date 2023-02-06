const btnAddTask = document.getElementById('btn-add-task')
const btnDeleteTask = document.getElementsByClassName('btn-delete')
const inputTask = document.getElementById('input-task-value')
const tableTask = document.getElementById('table-task')


tableTask.addEventListener('click', (e) => {
    let elementTarget = e.target
    console.log(elementTarget)
    if(elementTarget == btnAddTask){
        addTask()
    }
    if(elementTarget == btnDeleteTask.classList('btn-delete')){
        console.log('ok')
    }
    console.log(btnDeleteTask)
})

function addTask(){
    let inputTaskValue = inputTask.value
    console.log(inputTaskValue)

    const tr = document.createElement('tr')
    tr.classList.add('px-3', 'py-2', 'border-4', 'border-black', 'w-full')
    const td = document.createElement('td')

    const divId = document.createElement('div')
    divId.classList.add('flex', 'inline-flex', 'justify-end')

    const divTask = document.createElement('div')
    divTask.classList.add('flex', 'inline-flex', 'justify-end')
    

    const text = document.createElement('td')
    text.innerText = inputTaskValue

    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete'
    btnDelete.classList.add('px-3', 'py-2', 'border-2', 'border-black', 'rounded-xl', 'hover:bg-black', 'hover:text-white', 'duration-200', 'active:scale-90', 'btn-delete')
    
    const btnEdit = document.createElement('button')
    btnEdit.innerText = 'Edit'
    btnEdit.classList.add('px-3', 'py-2', 'border-2', 'border-black', 'rounded-xl', 'hover:bg-black', 'hover:text-white', 'duration-200', 'active:scale-90')
    
    const btnSave = document.createElement('button')
    btnSave.innerText = 'Save'
    btnSave.classList.add('px-3', 'py-2', 'border-2', 'border-black', 'rounded-xl', 'btn-save', 'hover:bg-black', 'hover:text-white', 'duration-200', 'active:scale-90')
    
    const btnFinish = document.createElement('button')
    btnFinish.innerText = 'Finish'
    btnFinish.classList.add('px-3', 'py-2', 'border-2', 'border-black', 'rounded-xl', 'btn-finish', 'hover:bg-black', 'hover:text-white', 'duration-200', 'active:scale-90')

    tableTask.appendChild(tr)
    tr.appendChild(td)
    td.appendChild(divId)
    tr.appendChild(td)
    td.appendChild(divTask)
    divTask.appendChild(text)
    divTask.appendChild(btnDelete)
    divTask.appendChild(btnSave)
    divTask.appendChild(btnFinish)
    divTask.appendChild(btnEdit)
}

function deleteTask(e){
}