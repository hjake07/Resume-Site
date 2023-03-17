const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('movein-animation')
            return;
        }
            entry.target.classList.remove('movein-animation')
    })
})
// observer.observe(document.querySelector('.movein-wrapper'))
// observer.observe(document.querySelector('.movein-wrapper1'))
observer.observe(document.querySelector('.movein-wrapper2'))
observer.observe(document.querySelector('.movein-wrapper3'))
observer.observe(document.querySelector('.movein-wrapper4'))

const newObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadingtext')
            return;
        }
            entry.target.classList.remove('fadingtext')
    })
})
newObserver.observe(document.querySelector('.fadeInUl'))
newObserver.observe(document.querySelector('.fadeInUl1'))
newObserver.observe(document.querySelector('.fadeInP'))

