const buttonTop = document.querySelector('.btn-top')

function handleScroll(){
    const height = document.body.getBoundingClientRect().top
    if(height < -700){
        buttonTop.style.display = 'block'
    } else {
        buttonTop.style.display = 'none'
    }
}

function handleClick(){
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', handleScroll)
buttonTop.addEventListener('click', handleClick)