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
        let main = document.querySelector('#main-content')
        let alert  = ` <div class="alert  fade show alert-success ml-auto mr-auto mt-5 fixed-top" role="alert" style = "width:200px; " id = 'forecastSuccess' >
                            <span>User Updated</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`


        e.preventDefault()
        $('#profileModal').modal('hide')
        updateUser(state)
        main.insertAdjacentHTML('beforebegin', alert)

        let userTimeout = setTimeout(() =>{
            $('.alert').alert('close')
        },3000).then(() =>
        clearTimeout(userTimeout))

    })

})
