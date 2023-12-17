const mainDiv = document.querySelector('.main-div');
const deer = document.querySelector('.deer');
const forest = document.querySelector('.forest');
const valley = document.querySelector('.valley');

if (localStorage.bg) {
    if (localStorage.bg == 'deer') {
        document.body.style.backgroundImage = 'url("images/deer.jpg")';
    }
    else if (localStorage.bg == 'forest') {
        document.body.style.backgroundImage = 'url("images/forest.jpg")';
    }
    else if (localStorage.bg == 'valley') {
        document.body.style.backgroundImage = 'url("images/valley.jpg")';
    }
}

mainDiv.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if(clickedElement.matches('.deer')) {
        deer.classList.add('opened');
        forest.classList.remove('opened');
        valley.classList.remove('opened');
        document.body.style.backgroundImage = 'url("images/deer.jpg")';
        localStorage.bg = 'deer';
    }

    if(clickedElement.matches('.forest')) {
        forest.classList.add('opened');
        deer.classList.remove('opened');
        valley.classList.remove('opened');
        document.body.style.backgroundImage = 'url("images/forest.jpg")';
        localStorage.bg = 'forest';
        
    }

    if(clickedElement.matches('.valley')) {
        valley.classList.add('opened');
        deer.classList.remove('opened');
        forest.classList.remove('opened');
        document.body.style.backgroundImage = 'url("images/valley.jpg")';
        localStorage.bg = 'valley';
    }

})

