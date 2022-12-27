
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

// картинка
function one() {
	if (isIE()) {
		let one = document.querySelectorAll("._one");
		for (var i = 0; i < one.length; i++) {
			if (one[i].querySelector('img') && one[i].querySelector('img').getAttribute('src') != null) {
				one[i].style.backgroundImage = 'url(' + one[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
one();
// бургер
let unlock = true;
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

const body = document.body;


let iconClose = document.querySelector(".story__close");
if (iconClose != null) {
	let delay = 500;
	let media = document.querySelector(".story__video");
	media.addEventListener("click", function (e) {
		let trailer = document.querySelector('.story__trailer');
		let video = document.querySelector('video');
		trailer.classList.add('_active');
		video.currentTime = 0;
		video.pause();
		iconClose.classList.toggle("_active");
		let pagePosition = window.scrollY;
		body.dataset.position = pagePosition;
		body.style.top = -pagePosition + 'px';
	});
};
let button = document.querySelector(".story__button");
if (button != null) {
	let delay = 500;
	button.addEventListener("click", function (e) {
		let trailer = document.querySelector('.story__trailer');
		let video = document.querySelector('video');
		trailer.classList.add('_active');
		video.currentTime = 0;
		video.pause();
		iconClose.classList.toggle("_active");
		let pagePosition = window.scrollY;
		body.dataset.position = pagePosition;
		body.style.top = -pagePosition + 'px';
	});
};
function video_close(bodyUnlock = true) {
	let iconClose = document.querySelector(".story__close");
	let trailer = document.querySelector('.story__trailer');
	iconClose.addEventListener("click", function (e) {
		iconClose.classList.remove("_active");
		trailer.classList.remove("_active");
		let pagePosition = parseInt(body.dataset.position, 10);
		body.style.top = 'auto';
		window.scroll({ top: pagePosition, left: 0 });
		body.removeAttribute('data-position');
	});
};
video_close();

