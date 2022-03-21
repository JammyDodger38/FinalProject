const menu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const links = document.querySelectorAll('.menu-list__link')

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(event);
            const id = link.getAttribute('href').substring(1)
            const section = document.getElementById(id)
            
            if (section) {
                console.dir(section);
                section.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }

            if( window.innerWidth < 992 ){
                mobileMenu.style.right = '-400px'
            }
        })
    })
}

export default menu
