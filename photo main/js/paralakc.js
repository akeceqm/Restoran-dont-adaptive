var w = window.screen.availWidth;
if(w > 1000){
let name= document.querySelector('.main__home')
window.addEventListener('mousemove', function(e) {
let x = e.clientX / window.innerWidth;
let y = e.clientY / window.innerHeight;
name.style.transform = 'translate(+' + x * 15 + 'px, +' + y * 15 + 'px)';
});
};