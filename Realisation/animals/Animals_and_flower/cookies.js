const btn_accepter = document.getElementById('accepter')
const btn_refuser = document.getElementById('refuser')
const cookies = document.getElementById('banniere')

btn_accepter.addEventListener('click', (cacher) => {
    cookies.classList.toggle("cache") ;
})

btn_refuser.addEventListener('click', (cacher) => {
    cookies.classList.toggle("cache") ;
})