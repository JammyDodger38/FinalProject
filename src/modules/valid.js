const valid = () => {
    const userName = document.querySelector('[name=user_name]')
    const userPhone = document.querySelector('[name=user_phone]')

    const blurInput = (ex) => {
        ex.target.value = ex.target.value.replace(/[\s]{2,}/, " ")
        ex.target.value = ex.target.value.replace(/[\-]{2,}/, "-")
        ex.target.value = ex.target.value.replace(/^\-/, "")
        ex.target.value = ex.target.value.replace(/\-$/, "")
    }

    userName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я\s\-]+/g, "")
    })
    userName.addEventListener('blur', (e) => {
        blurInput(e)
        e.target.value = e.target.value.toString().substring('0', '1').toUpperCase() + e.target.value.toString().substring('1').toLowerCase()
    })

    userPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]+/g, "")
    })
    userPhone.addEventListener('blur', (e) => {
        blurInput(e)
    })
}

export default valid