// handle all promise rejections
window.onunhandledrejection = function (event) {
    console.log(`Reason: ${event.reason}`,
        ` Return value: ${event.returnValue}`
    );
};


let mouseDown = false;
let sounds = {
    key: "/giga.m4a"
}

// preload audio files
let promises = [];
Object.keys(sounds).forEach(s => {
    promises.push(new Promise((resolve, reject) => {
        let url = sounds[s];
        sounds[s] = new Audio();
        sounds[s].addEventListener('canplaythrough', resolve, false);
        sounds[s].src = url;
    }));
});

Promise.all(promises).then(() => {
    stats.innerText = `c bon le son est chargé je crois`;
    stats.style.color = 'green';
    init();
}).catch(e => {
    stats.style.color = 'orange';
    stats.innerText = 'ca marche peut être'
});


function init() {
    Object.keys(sounds).forEach(s => {
        document.querySelectorAll(`.${s}`).forEach(k => {
            k.addEventListener('mousedown', () => {
                sounds[s].play();
            });
        })
    });
    piano.addEventListener('mousedown', () => mouseDown = true);
}