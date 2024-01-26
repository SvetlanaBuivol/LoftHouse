const navButtonEl = document.querySelector('.nav-icon-btn');
const navIconEl = document.querySelector('.nav-icon');
const mobileMenuEl = document.querySelector('.header__top');

navButtonEl.addEventListener('click', onNavButtonClick);

function onNavButtonClick() {
    navIconEl.classList.toggle('nav-icon--active');
    mobileMenuEl.classList.toggle('header__top--mobile');
    document.body.classList.toggle('no-scroll');
}

// phone mask
mask('[data-phone-input]');

const phoneInputs = document.querySelectorAll('[data-phone-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});