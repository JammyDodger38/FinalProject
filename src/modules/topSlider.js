const topSlider = () => {
    const slides = document.querySelectorAll('.top-slider .item')
    const topSliderDots = document.querySelector('.top-slider-dots')
    const sliderBlock = document.querySelector('.top-slider')
    let dots = document.querySelectorAll('.dot')

    let classActiveSlide = 'active'
    let classActiveDot = 'dot-active'

    const timeInterval = 3000

    let currentSlide = 0
    let interval

    document.addEventListener("DOMContentLoaded", () => {
        if (sliderBlock == null || slides == null) {
            console.log('Ошибка! Нет слайдера или слайдов.');
        } else {
            for (let i = 0; i < slides.length; i++) {
                let li = document.createElement('li')
                li.classList.add('dot')
                if(i == 0) {li.classList.add('dot-active')}
                topSliderDots.appendChild(li)
            }
            dots = document.querySelectorAll('.dot')
            startSlide(timeInterval)
        }
    });

    

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, classActiveSlide)
        prevSlide(dots, currentSlide, classActiveDot)

        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, classActiveSlide)
        nextSlide(dots, currentSlide, classActiveDot)
    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot')) {
            return
        }

        prevSlide(slides, currentSlide, classActiveSlide)
        prevSlide(dots, currentSlide, classActiveDot)

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if(e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, classActiveSlide)
        nextSlide(dots, currentSlide, classActiveDot)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)
}

export default topSlider