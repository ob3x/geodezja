window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav') 
    const navScroll = window.scrollY
    if(navScroll >= 10) {
        nav.style.backgroundColor = '#1b1b1b'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})
