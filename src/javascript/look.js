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
    if (keys['w']) {
        image.style.top = (y) + 'px'
        if ( (y) < 0) {
            y += timser
        }
    }
    if (keys['s']) {
        image.style.top = (y) + 'px'
        if ((imageHeight-((screenHeight*3)/4)) > -y) {
            y -= timser
        }            
    }
    if (keys['a']) {
        if ( (x) < 0) {
            x += timser
        }
        image.style.left = (x) + 'px'
    }
    if (keys['d']) {
        if ((imageWidth-((screenWidth*3)/4)) > -x) {
            x -= timser
        }
        image.style.left = (x) + 'px'
    }
    if (keys['t']) {
        t += 0.3
        image.style.filter = 'blur('+ (Math.abs(t)) +'vw)';
        console.log(t)
    }
    if (keys['g']) {
        t -= 0.3
        image.style.filter = 'blur('+ (Math.abs(t)) +'vw)';
    }
    rect = image.getBoundingClientRect();
    topleft = { x: rect.left,        y: rect.top };
    //console.log(topleft)
    screenWidth = window.screen.width; 
    screenHeight = window.screen.height; 
    imageWidth = image.clientWidth
    imageHeight = image.clientHeight
    console.log(imageWidth + "pxw");
    console.log(imageHeight + "pxh");
    console.log(-x + "x");
    console.log(y + "y");
    requestAnimationFrame(starwalking)
}

starwalking();


// let vert = (document.getElementById("target-id").textContent);
// document.getElementById("target-id").textContent = 'test';

//  export async function API_grab() {
// 	try {
// 		const fim = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
// 		const tean = await fim.json();
// 		const image = (tean.url)
//         return image
// 	} catch (error){
// 		console.error('Error fetching data:', error);
// 	}
// }