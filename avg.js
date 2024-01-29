var a = document.querySelector('.container .images:nth-child(1)');
var b = document.querySelector('.container .images:nth-child(2)');
var c = document.querySelector('.container .images:nth-child(3)');
var d = document.querySelector('.container .images:nth-child(4)');
var e = document.querySelector('.container .images:nth-child(5)');
var f = document.querySelector('.container .images:nth-child(6)');
var g = document.querySelector('.container .images:nth-child(7)');
var h = document.querySelector('.container .images:nth-child(8)');
var i = document.querySelector('header');
var j = document.querySelector('.slider');
var k = document.querySelector('.luffy');
var l = document.querySelector('.luffy .cl');
var m = document.querySelector('.luffy .cl .button');




gsap.from(e, { duration: 1, y: '4000%', delay: 0.5, ease: 'power4.in' })
gsap.from(f,  { duration: 1, y: '4000%', delay: 1, ease: 'power4.in' })
gsap.from(a,  { duration: 2, y: '400%', delay:1.8, ease: 'power4.in' })
gsap.from(b,  { duration: 2, y: '400%', delay: 1.9, ease: 'power4.in' })
gsap.from(c,  { duration: 2, y: '400%', delay: 2.9, ease: 'power4.in' })
gsap.from(d,  { duration: 2, y: '400%', delay: 2.1, ease: 'power4.in' })
gsap.from(g,  { duration: 2, y: '400%', delay: 2.2, ease: 'power4.in' })
gsap.from(h,  { duration: 2, y: '400%', delay: 2.3, ease: 'power4.in' })
gsap.from(i,  { duration: 2, y: '-100%', delay: 0, ease: 'power4.in' })
gsap.from(j,  { duration: 1, y: '100%', delay: 1.2, ease: 'power4.in' })
gsap.from(k,  { duration: 1, y: '100%', delay: 1.2, ease: 'power4.in' })
gsap.from(l,  { duration: 1, y: '-2000%', delay: 1.5, ease: 'power4.in' })
gsap.fromTo(m,  { duration: 1, x: '-2000%', delay: 2, ease: 'power4.in' },{duration: 1, x: 'z0%', delay: 3, ease: 'power4.in'})