const upScroll = () => {
    const upArrow = document.querySelector('.up')
    const servicesBlock = document.querySelector('#services')

    let timeOut;

    const goUp = () => {
        let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, -100);
            timeOut = setTimeout(goUp, 20);
        } else clearTimeout(timeOut);
    }

    document.addEventListener('DOMContentLoaded', () => {
        upArrow.style.display = 'none'
    })

    document.addEventListener('scroll', () => {
        const posTop = servicesBlock.getBoundingClientRect().top

        posTop <= 0 ? upArrow.style.display = '' : upArrow.style.display = 'none'
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.up')) {
            goUp()
        }
    })
}

export default upScroll