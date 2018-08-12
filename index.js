module.exports = {
	d: document,
	w: window,
	c: console,
	m: Math,
	id: arg => document.getElementById(arg),
	class: arg => document.getElementsByClassName(arg),
	tag: arg => document.getElementsByTagName(arg),
	q: arg => document.querySelector(arg),
	qa: arg => document.querySelectorAll(arg),
	l: arg => console.log(arg),
	iw: window.innerWidth,
	ih: window.innerHeight,
	ow: window.outerWidth,
	oh: window.outerHeight
}