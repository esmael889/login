let passInput = document.querySelectorAll(".passInput input")
        let state = false

        const toggleType = (icon) => {
            if(state){
                icon.classList.remove('fa-eye-slash')
                icon.classList.add('fa-eye')
                icon.parentElement.querySelector('input').type = 'password'
                state = false
            }else{
                icon.classList.remove('fa-eye')
                icon.classList.add('fa-eye-slash')
                icon.parentElement.querySelector('input').type = 'text'
                state = true
            }
        }

        passInput.forEach(input => {
            input.addEventListener('keyup', e => {
                if(e.target.value.length != 0){
                  input.parentElement.querySelector('i').style.display = 'block'
                }else{
                    input.parentElement.querySelector('i').style.display = 'none'
                }
            })
        })