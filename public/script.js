// handle all promise rejections
window.onunhandledrejection = function (event) {
    console.log(`Reason: ${event.reason}`,
        ` Return value: ${event.returnValue}`
    );
};


let mouseDown = false;
let sounds = {
    key: "https://rr1---sn-5hneknee.googlevideo.com/videoplayback?expire=1673921110&ei=9q3FY7LKNPaa1sQPtJC7aA&ip=168.80.82.122&id=o-ABVJz0mAoxAsFnSjQFcWocayDAfC232KdKfPKGY8Wssp&itag=140&source=youtube&requiressl=yes&pcm2=no&vprv=1&mime=audio/mp4&gir=yes&clen=2080502&dur=128.476&lmt=1659808617818491&keepalive=yes&fexp=24007246&c=ANDROID&txp=5318224&sparams=expire,ei,ip,id,itag,source,requiressl,pcm2,vprv,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgVr7hBRI1F_vrSkWZKCADN1UbSmj_FvEeu7oi3FZWQygCIGLU0ohMq-Lz-d9Pd6C5RRzmu3PO-Rgw5yc4IGl9G4sm&avi=K1A%2FHwERIiwAVF9GTgJcZhckAkEWFnVHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLR1NcDQkCHWhAR0dXRnddVEZVSwEdEH4xCiQfCxAOChEYERZaEwhdJR4FWkc3OBcWEwsQd1hfViMGCBsVVndHVUBSVxsICwZhQ0taRzE1ERYXBhBMQ2ZKIBdLTEcWLBYBJgkFWlRAeSNQFA%3D%3D&from_cache=False&title=Gemroz%20-%20GigaMinionChad%20(prod.%20justxrolo)&rm=sn-pmcg-bg0red&req_id=eafee4d8978da3ee&cmsv=e&ipbypass=yes&redirect_counter=2&cm2rm=sn-bg0ys7e&cms_redirect=yes&mh=nC&mip=2a01:e34:ed35:42e0:b093:52bf:446c:897&mm=34&mn=sn-5hneknee&ms=ltu&mt=1673899016&mv=m&mvi=1&pl=46&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOUXyRsxSZRepZU-I-lghyWZ3oWv8zR2ZLW19oq0K955AiEApnHs_XB5iQG20H7XMMLXw7ZRiTd7AhqvXMcf4WKXdbE%3D"
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