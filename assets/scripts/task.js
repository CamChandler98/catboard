


document.addEventListener('DOMContentLoaded', () => {
    let addTaskInput = document.querySelector('#addTaskInput')
    let addTaskBtn = document.querySelector('#addTaskBtn')
    let taskContainer = document.querySelector('#tasksContainer')

    let taskForm = document.querySelector('#tasksForm')
    let taskProgress = document.querySelector('.progress-bar')
    let progressLabel = document.querySelector('#progressLabel')

    const getRatio = () => {
        let tasks = document.querySelectorAll('#tasksForm .form-check-input')
        let checked = 0
        let total = tasks.length
        tasks.forEach(el => {
            if(el.checked) checked++
        })

        return Math.round((checked/total) * 100)
    }

    const getTaskCount = () => {
        return taskContainer.childElementCount
    }


    const genCheckBox = (text) => {
        let taskNumber = getTaskCount() + 1

        let newHtml = `<div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="task${taskNumber}">
                            <label class="form-check-label" for="task${taskNumber}">
                                ${text}
                            </label>
                        </div>`

        return newHtml
    }

    addTaskBtn.addEventListener('click', () => {
        let taskText = addTaskInput.value

        if(!taskText) return

        let newTask = genCheckBox(taskText)

        taskContainer.insertAdjacentHTML("beforeend", newTask)

        addTaskInput.value = ''

    })


    const updateProgress = () => {
        let ratio = getRatio()

        progressLabel.innerText =`${ratio}%`

        taskProgress.style.width = `${ratio}%`

        taskProgress.setAttribute('aria-valuenow', `${ratio}`)
    }

    taskForm.addEventListener('submit', (e) => {
        let main = document.querySelector('#main-content')
        let alert  = ` <div class="alert  fade show alert-success ml-auto mr-auto mt-5 fixed-top" role="alert" style = "width:200px; " id = 'forecastSuccess' >
                            <span>Tasks Updated</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`

        let timeout = setTimeout(() =>{
            $('.alert').alert('close')
        },3000)
        e.preventDefault()
        console.log('?????')
        $('#tasksModal').modal('hide')
        updateProgress()
        main.insertAdjacentHTML('beforebegin', alert)

        let taskTimeout = setTimeout(() =>{
            $('.alert').alert('close')
        },3000).then(() =>
        clearTimeout(taskTimeout))
    })

})
