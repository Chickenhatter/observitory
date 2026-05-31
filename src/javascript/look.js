const keys = {};
const image = document.getElementById('the_image')
let y = 0;
let x = 0;
let t = 0;
let place_in_spacet = 0
let place_in_spaced = 0
let rect = image.getBoundingClientRect();
let topleft = { x: rect.left,        y: rect.top };


document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true
});
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false
});

function starwalking() {
    if (keys['w']) {
        image.style.top = (y) + 'px'
        if ( y < 0) {
            y += 1
        }
    }
    if (keys['s']) {
        image.style.top = (y) + 'px'
        y -= 1
    }
    if (keys['a']) {
        image.style.left = (x) + 'px'
        if ( x < 0) {
            x += 1
        }
    }
    if (keys['d']) {
        image.style.left = (x) + 'px'
        x -= 1
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
    console.log(topleft)
    let screenWidth = window.screen.width; 
    console.log(screenWidth + "px");
    let screenHeight = window.screen.height; 
    console.log(screenHeight + "px");
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