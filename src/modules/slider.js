const slider = () => {
    const servicesElements = document.querySelector('.services-elements')
    const servicesCarousel = document.querySelector('.services-carousel')
    const carouselItems = document.querySelectorAll('.carousel__items')
    
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    let i = 1;
    let width = 380; // ширина картинки
    let count = 3; // видимое количество изображений

    window.addEventListener('resize', () => {
        if (window.innerWidth < 770) {
            servicesElements.style.width = '360px'
            count = 1
    
        } else if( window.innerWidth < 992 ){
            servicesElements.style.width = '748px'
            count = 2
        } else{
            servicesElements.style.width = '1115px'
            count = 3
        }
    })

    /* конфигурация */
    

    let list = servicesCarousel.querySelector('ul');
    let listElems = servicesCarousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    arrowLeft.onclick = function() {
      // сдвиг влево
      position += width + count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    arrowRight.onclick = function() {
      // сдвиг вправо
      position -= width + count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

    // arrowRight.addEventListener('click', () => {
    //     let elem, temp
        
    //     setTimeout(function() {
    //         servicesCarousel.style.cssText = 'transition: none;';
    //         elem = servicesCarousel.firstElementChild;
    //         temp = elem.cloneNode(true);
    //         servicesCarousel.appendChild(temp);
    //         temp.style.display = 'none'
    //         servicesCarousel.removeChild(elem)
    //         servicesCarousel.children[2].style.display = ''
    //     }, 250);
    // })

    // arrowLeft.addEventListener('click', () => {
    //     let elem, temp
    //     setTimeout(function() {
    //         elem = servicesCarousel.lastElementChild
    //         temp = elem.cloneNode(true)
    //         servicesCarousel.children[2].style.display = 'none'
    //         servicesCarousel.insertBefore(temp, servicesCarousel.firstElementChild)
    //         servicesCarousel.children[0].style.display = ''
    //         servicesCarousel.removeChild(elem)
    //         servicesCarousel.style.cssText = 'transition: margin '+500+'ms ease;'
    //     }, 250)
    // })
}

export default slider