const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItems = nav.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger.addEventListener('click', ()=>{
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--active');
	body.classList.toggle('noscroll');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		burger.classList.remove('burger--active');
		nav.classList.remove('nav--active');
		body.classList.remove('noscroll');
	});
});

const tabBtn = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs__content');

tabBtn.forEach(function (element){
	element.addEventListener('click', open);
})

function open(evt){
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabBtn.forEach(function (item){
		item.classList.remove('tabs__btn--active');
	})

	tabTarget.classList.add('tabs__btn--active');

	tabContent.forEach(function (item){
		item.classList.remove('tabs__content--active');
	});

	document.querySelector(`#${button}`).classList.add('tabs__content--active');
}

gsap.config({
	nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add("(min-width: 1101px)", () => {
	tl.fromTo(
		'.hero__wrap-content',
		{
			xPercent: -20,
			opacity: 0,
		},
		{
			xPercent: 0,
			opacity: 1,
			duration: 1,
		}
	)
		.fromTo(
		'.hero__content',
		{
			x: -30,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			duration: 1,
		}
	)
		.fromTo(
		'.tabs',
		{
			scale: 0,
			opacity: 0,
		},
		{
			scale: 1,
			opacity: 1,
			duration: 0.3,
		}
	)
		.fromTo(
		'.parties .parties__link',
		{
			scale: 0,
			opacity: 0,
		},
		{
			scale: 1,
			opacity: 1,
			duration: 0.3,
			stagger: 0.15,
		}
	)
		.fromTo(
		'.poster__box',
		{
			yPercent: -20,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.1
	)
		.fromTo(
		'.poster__list .poster__list-item',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			stagger: 0.15,
			duration: 1,
		},
		1.4
	)
		.fromTo(
		'.corp-events__box',
		{
			yPercent: -20,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.1
	)
	.fromTo(
		'.corp-events__option-title',
		{
			xPercent: -50,
			opacity: 0,
		},
		{
			xPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.8
	)
	.fromTo(
		'.corp-events__option-content .corp-events__option-item',
		{
			yPercent: 20,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
		1.3
	)
		.fromTo(
		'.gallery__box',
		{
			yPercent: -20,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.1
	)
		.fromTo(
		'.gallery__list .gallery__list-item',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			stagger: 0.15,
			duration: 1,
		},
		1.4
	)
});

mm.add("(min-width: 1101px)", () => {
	gsap.from('.catalog__box', {
		scrollTrigger: {
			trigger: '.catalog',
			start: '-20% center',
			end: '+=300px',
		},
		scale: 0,
		transformOrigin: 'left center',
		duration: 1,
	});
	
	gsap.from('.catalog__list .catalog__list-item', {
		scrollTrigger: {
			trigger: '.catalog__slider',
			start: '-30% center',
			end: '+=500px',
		},
		scale: 0,
		transformOrigin: 'top center',
		duration: 1,
		stagger: 0.20,
	});

	gsap.from('.swiper-button-next', {
		scrollTrigger: {
			trigger: '.catalog__slider',
			start: '5% center',
			end: '+=500px',
		},
		opacity: 0,
		duration: 1,
	},
	1
	);

	gsap.from('.swiper-button-prev', {
		scrollTrigger: {
			trigger: '.catalog__slider',
			start: '5% center',
			end: '+=500px',
		},
		opacity: 0,
		duration: 1,
	},
	1
	);

	gsap.from('.catalog__button-link', {
		scrollTrigger: {
			trigger: '.catalog__slider',
			start: '60% center',
			end: '+=200px',
		},
		yPercent: 60,
		duration: 1,
	});

	gsap.from('.events__item-left', {
		scrollTrigger: {
			trigger: '.events',
			start: '-50% center',
			end: '+=600px',
		},
		xPercent: -80,
		duration: 1.5,
	},
	1
	);

	gsap.from('.events__item-right', {
		scrollTrigger: {
			trigger: '.events',
			start: '-50% center',
			end: '+=600px',
		},
		xPercent: 80,
		duration: 1.5,
	},
	1
	);

	gsap.from('.events__img', {
		scrollTrigger: {
			trigger: '.events',
			start: '-40% center',
			end: '+=600px',
		},
		yPercent: 80,
		duration: 1,
	},
	1.8
	);

	gsap.from('.techrider__box', {
		scrollTrigger: {
			trigger: '.techrider',
			start: '-20% center',
			end: '+=300px',
		},
		scale: 0,
		transformOrigin: 'right center',
		duration: 1,
	});

	gsap.from('.accordion .accordion__item', {
		scrollTrigger: {
			trigger: '.techrider',
			start: 'top center',
			end: '+=600px',
		},
		yPercent: 150,
		opacity: 0,
		duration: 1,
		stagger: 0.20,
	});

	gsap.from('.techrider__team-title', {
		scrollTrigger: {
			trigger: '.techrider',
			start: '20% center',
			end: '+=300px',
		},
		xPercent: 80,
		opacity: 0,
		duration: 1,
	});

	gsap.from('.techrider__team-list .techrider__team-item', {
		scrollTrigger: {
			trigger: '.techrider',
			start: '25% center',
			end: '+=300px',
		},
		yPercent: 80,
		opacity: 0,
		duration: 1,
		stagger: 0.20,
	});

	gsap.from('.corp-events__benefits-title', {
		scrollTrigger: {
			trigger: '.corp-events__benefits',
			start: '-50% center',
			end: '+=300px',
		},
		xPercent: 80,
		opacity: 0,
		duration: 1,
	});


	gsap.from('.corp-events__list .corp-events__list-item', {
		scrollTrigger: {
			trigger: '.corp-events__benefits',
			start: '-40% center',
			end: '+=300px',
		},
		opacity: 0,
		duration: 1,
		stagger: 0.15,
	});

});

const swiper = new Swiper(".catalog__slider", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const accordion = document.querySelector('.accordion');
const accordionItems = document.querySelectorAll('.accordion__item');
const accordionListBtns = accordion.querySelectorAll('.accordion__title');

accordionItems.forEach.call(accordionItems, function (accordionItem){
	accordionItem.addEventListener('click', function(){
		accordionItem.classList.toggle('accordion__item--active');
	});
});

accordionListBtns.forEach.call(accordionListBtns, function (accordionListBtn){
	accordionListBtn.addEventListener('click', function() {

		const currentText = accordionListBtn.parentElement.querySelector('.accordion__text');

		accordionListBtn.classList.toggle('accordion__title--active');
		currentText.classList.toggle('accordion__text--visible');

		if (currentText.classList.contains('accordion__text--visible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else{
			currentText.style.maxHeight = null;
		}

	});
});

