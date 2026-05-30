const keys = {};
const image = document.getElementById('the_image')
let y = 0;
let x = 0;
let place_in_spacet = 0
let place_in_spaced = 0

document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true
});
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false
});

function starwalking() {
    if (keys['w']) {
        image.style.top = (y) + 'px'
        y -= 1
        console.log('yeresd')
    }
    if (keys['s']) {
        image.style.top = (y) + 'px'
        y += 1
    }
    if (keys['a']) {
        image.style.left = (x) + 'px'
        x -= 1
    }
    if (keys['d']) {
        image.style.left = (x) + 'px'
        x += 1
    }
    requestAnimationFrame(starwalking)
}

starwalking();




const key = import.meta.env.API_KEY; 
async function API_grab() {
	try {
		const fim = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
		const tean = await fim.json();
		const image = (tean.url)
		document.getElementById('the_image').src = image
	} catch (error){
		console.error('Error fetching data:', error);
		console.log('Image has been added')
		document.getElementById('the_image').src = 'https://apod.nasa.gov/apod/image/2605/M104noirlab2612a_1024.jpg'
	}
}
API_grab();
