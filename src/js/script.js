const buttonTop = document.querySelector('.btn-top')

function handleScroll(){
    const height = document.body.getBoundingClientRect().top
    if(height < -700){
        buttonTop.style.display = 'block'
    } else {
        buttonTop.style.display = 'none'
    }
}

window.addEventListener('scroll', handleScroll)