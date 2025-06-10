const header = document.getElementById('header');
const dragBar = document.getElementById('drag-bar');
const mainContent = document.getElementById('main-content');

let isDragging = false; /* Variable declaration */

dragBar.addEventListener('mousedown', (e) => {
    isDragging=true;
    document.body.style.cursor = 'ew-resize';
    e.preventDefault();
});

document.addEventListener('mouseup', () =>{
    isDragging=false;
    document.body.style.cursor = 'default';
});

document.addEventListener('mousemove', (e) => {
    if(!isDragging) return;

    let newWidth = e.clientX;

    const minWidth = 200;
    const maxWidth = 600
    if(newWidth < minWidth){
        newWidth = minWidth;
    }
    if(newWidth > maxWidth){
        newWidth = maxWidth
    }

    header.style.width = newWidth + 'px';
    mainContent.style.marginLeft = newWidth + 'px';

});