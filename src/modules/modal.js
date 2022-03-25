const modal = () => {
    const header = document.querySelector('.header')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.getElementById('callback')
    const modalClose = document.querySelector('.modal-close')
    const servicesElements = document.querySelector('.services-elements')

    const noService = document.getElementById('noService')

    const mobileMenu = document.querySelector('.mobile-menu')

    header.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('callback-btn')) {
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        }
    })

    modalOverlay.addEventListener('click', (e) => {
        
        modalOverlay.style.display = 'none'
        modalCallback.style.display = 'none'
    })

    modalClose.addEventListener('click', () => {
        modalOverlay.style.display = 'none'
        modalCallback.style.display = 'none'
    })

    servicesElements.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.nextElementSibling.closest('.img-wrapper')) {
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        }
    })

    noService.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('button-services')) {
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        }
    })

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.closest('.callback-btn')) {
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        }
    })
}

export default modal