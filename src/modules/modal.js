const modal = () => {
    const header = document.querySelector('.header')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.getElementById('callback')
    const modalClose = document.querySelector('.modal-close')

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
}

export default modal