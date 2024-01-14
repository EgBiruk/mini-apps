const images = Array.from(document.querySelectorAll('img'));


if (localStorage.bg) {
    document.body.style.backgroundImage = `url(${localStorage.bg})`;
const activeImg = images.find(item => item.getAttribute('src') === localStorage.bg);
if (activeImg) {
  activeImg.classList.add('active');
}

}

window.addEventListener('click', e => {
    const clickedElement = e.target;
     images.forEach(item => {
        item.classList.remove('active');
        if (clickedElement == item) {
            item.classList.add('active');
            let url = item.getAttribute('src');
            document.body.style.backgroundImage = `url(${url})`;
            localStorage.bg = url;
        }
     })
})