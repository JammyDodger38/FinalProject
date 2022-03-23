const sendForm = async () => {
    const form = document.getElementById('form-callback')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'

    const validate = (list) => {
        let success = true
        if (list.user_name.length < 2 || list.user_phone.length < 5 || list.user_phone.length > 16) {
            success = false
        }
        return success
    }

    const sendData = async (data) => {
        return await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    
    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formBody)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        if (input.type != 'submit') {
                            input.value = ''
                        }
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = errorText
            alert('Данные не валидны')
        }
    }

    try {
        if(!form) {
            throw new Error ('Верните форму!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            
            submitForm()
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm