const keys = {};
const image = document.getElementById('the_image')
let y = 0;
let x = 0;
let t = 0;
let place_in_spacet = 0
let place_in_spaced = 0
let rect = image.getBoundingClientRect();
let topleft = { x: rect.left,        y: rect.top };
let screenWidth = window.screen.width; 
let screenHeight = window.screen.height; 
let imageWidth = image.clientWidth
let imageHeight = image.clientHeight
let timser = 0


document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true
});
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false
});

function starwalking() {
    timser = screenHeight/600
    console.log(-x, 'xxxx')
    console.log((imageWidth-((screenWidth*2)/3)))
    if ( (y ) > (screenHeight / 4)) {
            y = ((screenHeight / 4) -1)
            image.style.top = (y) + 'px'
    }
    if (((imageHeight-((screenHeight*3)/4)) < -y)) {
            y = (-(imageHeight-((screenHeight*3)/4)))
            image.style.top = (y) + 'px'
    }
    if (((imageWidth-((screenWidth*2)/3))+timser < -x)) {
       x = -(imageWidth-((screenWidth*2)/3))
      image.style.left = (x) + 'px'
    }
    if (( (x) > screenWidth/3)) {
        x = (screenWidth/3)-timser
        image.style.left = (x) + 'px'
    }
    




    if (keys['w']) {
        if ( (y ) < (screenHeight / 4)) {
            y += timser
        }
        image.style.top = (y) + 'px'
    }
    if (keys['s']) {
        image.style.top = (y) + 'px'
        if ((imageHeight-((screenHeight*3)/4)) > -y) {
            y -= timser
        }            
    }
    if (keys['a']) {
        if ( (x) < screenWidth/3) {
            x += timser
        }
        image.style.left = (x) + 'px'
    }
    if (keys['d']) {
        if ((imageWidth-((screenWidth*2)/3)) > -x) {
            x -= timser
        }
        image.style.left = (x) + 'px'
    }
    if (keys['t']) {
        if (t < 10) {
            t += 0.3
        }
        image.style.filter = 'blur('+ (Math.abs(t)) +'vw)';    }
    if (keys['g']) {
        if (t > -10) {
            t -= 0.3
        }
        image.style.filter = 'blur('+ (Math.abs(t)) +'vw)';
    }
    rect = image.getBoundingClientRect();
    topleft = { x: rect.left,        y: rect.top };
    //console.log(topleft)
    screenWidth = window.screen.width; 
    screenHeight = window.screen.height; 
    imageWidth = image.clientWidth
    imageHeight = image.clientHeight
    requestAnimationFrame(starwalking)
}

starwalking();

const black = document.getElementById("blackout")
const hide_view = document.getElementById("Remove")
hide_view.addEventListener('click',() => {
    if (black.classList.contains('opacity-0')){
        black.classList.remove('opacity-0')
    }else {
        black.classList.add('opacity-0')
    }
});

const backing = document.getElementById("Goback")
backing.addEventListener('click',() => {
    window.location.href = "/"
});