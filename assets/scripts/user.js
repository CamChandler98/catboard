const defaultState = {
    name: 'User'
}


let state = {...defaultState}

document.addEventListener('DOMContentLoaded', () => {
    let nameField = document.querySelector('#dashboardName')
    let nameForm = document.querySelector('#editUserForm')
    let nameInput = document.querySelector('#editNameInput')

    const updateUser = (state) => {
        const {name} = state

        nameField.innerText = `${name}'s Dashbaord`
    }

    nameInput.addEventListener('input', e => {
        console.log('changing name')
       let value = e.target.value
        state = {...state, name: value}
    })

    nameForm.addEventListener('submit',  (e) => {
        e.preventDefault()
        $('#profileModal').modal('hide')
        updateUser(state)
    })

})
