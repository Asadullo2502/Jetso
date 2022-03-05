// Accordion------------------------------------------------------------------------
const showAccordion = (event) => {
    if (event.currentTarget.parentNode.classList.contains('show')) {
        event.currentTarget.parentNode.classList.remove('show')
        event.currentTarget.parentNode.style.maxHeight = '102px'
    } else {
        event.currentTarget.parentNode.classList.add('show')
        event.currentTarget.parentNode.style.maxHeight = event.currentTarget.parentNode.scrollHeight + 'px'
    }
}

// Tab-----------------------------------------------------------------------------

const salesGroupTab = document.querySelector('#salesGroupTab')
const salesAcademyTab = document.querySelector('#salesAcademyTab')
const firstTabBtn = document.querySelector('#firstTabBtn')
const secondTabBtn = document.querySelector('#secondTabBtn')

const changeTab = (num) => {
    if (num === 0) {
        salesAcademyTab.style.display = 'none';
        salesGroupTab.style.display = 'block';
        secondTabBtn.classList.remove('active')
        firstTabBtn.classList.add('active')
    } else if (num === 1) {
        salesGroupTab.style.display = 'none';
        salesAcademyTab.style.display = 'block';
        firstTabBtn.classList.remove('active')
        secondTabBtn.classList.add('active')
    }
}

// FormDropdown-----------------------------------------------------------------------
const serviceInputValue = document.querySelector('#serviceInputValue')
const serviceInput = document.querySelector('#serviceInput')

const showFormDropdown = (event) => {
    if (event.currentTarget.parentNode.classList.contains('show')) {
        event.currentTarget.parentNode.classList.remove('show')
        event.currentTarget.parentNode.children[1].style.maxHeight = '0px'
    } else {
        event.currentTarget.parentNode.classList.add('show')
        event.currentTarget.parentNode.children[1].style.maxHeight = event.currentTarget.parentNode.children[1].scrollHeight + 'px'
    }
}

const chooseServiceInput = (event) => {
    serviceInputValue.innerHTML = event.currentTarget.innerHTML
    event.currentTarget.parentNode.parentNode.classList.remove('show')
    event.currentTarget.parentNode.parentNode.children[1].style.maxHeight = '0px'
}

document.addEventListener('mouseup', function (e) {

    if (!serviceInput.contains(e.target)) {
        serviceInput.classList.remove('show')
        serviceInput.children[1].style.maxHeight = '0px'
    }

});

// Navbar--------------------------------------------------------------------------
const body = document.querySelector('#body')
const nav = document.querySelector('#nav')
const burger = document.querySelector('#burger')

const showNavbar = () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        body.style.overflowY = 'auto'
        nav.classList.remove('show')
    } else {
        burger.classList.add('active')
        body.style.overflowY = 'hidden'
        nav.classList.add('show')
    }
}

const closeNav = () => {
    burger.classList.remove('active')
    body.style.overflowY = 'auto'
    nav.classList.remove('show')
}