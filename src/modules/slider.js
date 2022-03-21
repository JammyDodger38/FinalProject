const slider = () => {
    const servicesCarousel = document.querySelector('.services-carousel')
    
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    arrowRight.addEventListener('click', () => {
        let elem, temp
        setTimeout(function() {
            servicesCarousel.style.cssText = 'transition: none;';
            elem = servicesCarousel.firstElementChild;
            temp = elem.cloneNode(true);
            servicesCarousel.appendChild(temp);
            temp.style.display = 'none'
            servicesCarousel.removeChild(elem)
            servicesCarousel.children[2].style.display = ''
        }, 250);
    })

    arrowLeft.addEventListener('click', () => {
        let elem, temp
        setTimeout(function() {
            elem = servicesCarousel.lastElementChild
            temp = elem.cloneNode(true)
            servicesCarousel.children[2].style.display = 'none'
            servicesCarousel.insertBefore(temp, servicesCarousel.firstElementChild)
            servicesCarousel.children[0].style.display = ''
            servicesCarousel.removeChild(elem)
            servicesCarousel.style.cssText = 'transition: margin '+500+'ms ease;'
        }, 250)
    })
}

export default slider