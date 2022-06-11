// Init tooltips
tippy('.link',{
    placement: 'bottom'
})

window.onload = () => {
    mailBut.querySelector('#profile')
    toggleDark()
    mailBut = document.querySelector('#mail-but')
    mailTextCont = document.querySelector('#mail-text-cont')
    mailBut.onclick = () => {
        mailTextCont.textContent = "Copied into clipboard"
        setTimeout(() =>{ 
            mailTextCont.textContent = "huynhkhaphi.ltp20@gmail.com"
        }, 2000)
    }
}

function toggleDark() {
    toggle.innerHTML = "☀️";
    body.classList.remove('text-gray-900')
    body.classList.add('text-gray-100')
    profile.classList.remove('bg-white')
    profile.classList.add('bg-gray-900')
}
function toggleLight() {
    toggle.innerHTML = "🌙";
    body.classList.remove('text-gray-100')
    body.classList.add('text-gray-900')
    profile.classList.remove('bg-gray-900')		
    profile.classList.add('bg-white')
}

// Switch between light mode & dark mode
const toggle = document.querySelector('.js-change-theme')
const body = document.querySelector('body')
const profile = document.getElementById('profile')

toggle.addEventListener('click', () => {
    if (body.classList.contains('text-gray-900')) 
        toggleDark()
    else 
        toggleLight()
})