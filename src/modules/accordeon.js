const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')
    const itemAccordion = accordeon.querySelectorAll('.element')
    const itemBody = accordeon.querySelectorAll('.element-content')

    itemAccordion.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            itemAccordion.forEach((button, index) => {
                button.classList.remove('active')
                itemBody[index].style.display = 'none'
            })

            btn.classList.add('active')
            itemBody[index].style.display = 'block'
        })
    })
}

export default accordeon