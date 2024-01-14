const navTabs = document.querySelector('.nav-tabs');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const infoBlocks = Array.from(document.querySelectorAll('.info-item'));

navTabs.addEventListener('click',e => {
    const clickedElement = e.target;
    if (clickedElement.matches('.nav-link')) {
        navLinks.forEach(item => {
            item.classList.remove('active');
        })
        clickedElement.classList.add('active');
        const index = navLinks.indexOf(clickedElement);
        infoBlocks.forEach(item => {
            item.classList.remove('active');
        })
        infoBlocks[index].classList.add('active');
    }
})