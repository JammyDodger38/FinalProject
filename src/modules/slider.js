const slider = () => {
    const servicesElements = document.querySelector('.services-elements')
    const servicesCarousel = document.querySelector('.services-carousel')
    
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    let width = 380;
    let count = 3;

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

    let position = 0;

    arrowLeft.onclick = function() {
      
      position += width + count;
      
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    arrowRight.onclick = function() {
      
      position -= width + count;
      
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
}

export default slider