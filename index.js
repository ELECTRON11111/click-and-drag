const slider = document.querySelector('.items');
let isDown = false;
// the startX variable is for the position clicked initially along the x-plane 
let startX, scrollLeft;


// We'll be working with the following events 
// 'mousedown', 'mouseleave', 'mouseup','mousemove'

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // e.pageX is the distance from the left of the page to the point that was clicked.
    // But then since the slider does not directly start from the end of the page, we remove the offset distance of the slider from the e.pageX
    // That offset distance is what is between the slider and the page.
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    // if the condition is met, it returns and everything below does not run
    if(!isDown) return;
    e.preventDefault();
    // We recalculate mouse x position for every mousemove
    const x = e.pageX - slider.offsetLeft;
    // walk defines how much deviation
    const walk = (x - startX) * 3; // for speed 3X
    slider.scrollLeft = scrollLeft - walk;

});
