const input = document.querySelector('.input');
const form = document.querySelector('.form-search');
const player = document.querySelector('.player');
const prewCont = document.querySelector('.prew-container');

function myFunc (link) {
    fetch(link)
    .then((response) =>  response.json())
    .then((data) => {
    console.log(data);
    render1(data);
    render2(data);
    })    
}
function render1 (data) {
    prewCont.innerHTML = '';
    for(i = 0; i < 5; i++) {
        const template = `
        <div class="prew"><img src="${data.items[i].snippet.thumbnails.medium.url}" alt="" class="${i}"></div>
        `;
        prewCont.innerHTML += template;
    }
    }

function render2 (data) {
    const template =` 
    <iframe width="775" height="400" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `;
    player.innerHTML = template;
    prewCont.addEventListener('click', e => {
        let id = e.target.classList.value;
        let iframe = player.querySelector('iframe');
        if (iframe) {
            player.removeChild(iframe);
        }
        const template =` 
        <iframe width="775" height="400" src="https://www.youtube.com/embed/${data.items[id].id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        `;
        player.innerHTML = template;
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = input.value;
    myFunc(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${inputText}&type=video`);
})

