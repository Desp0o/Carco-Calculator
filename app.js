
var overlayStart = document.querySelector('.overlay')
var calculator = document.querySelector('.calculator')
var contactApp = document.querySelector('.contactapp')
var calcIcon = document.getElementById('calc_app')
var contactPage = document.querySelector('.contact_content')

let viber = document.querySelector('.viber')
viber.addEventListener('click',()=>{
    window.location.href='viber://chat/?number=577444987'
})

let whatsup = document.querySelector('.whatsup')
whatsup.addEventListener('click',()=>{
    window.location.href='https://wa.me/995557330744'
})


let facebook = document.querySelector('.facebook')
facebook.addEventListener('click',()=>{
    window.location.open='https://www.facebook.com/Carco.ge'
})

window.onload = ()=>{ 
    setTimeout(()=>{
        overlayStart.style.display = 'none'
    },2500)
}

contactApp.onclick = ()=>{
    calculator.style.display = 'none'
    contactPage.style.display = 'block'
}

calcIcon.onclick = ()=>{
    calculator.style.display = 'flex'
    contactPage.style.display = 'none'
}


