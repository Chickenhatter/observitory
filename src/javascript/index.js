const time = document.getElementById('time');
const current = document.getElementById('current');

let response = await fetch("https://hackatime.hackclub.com/api/v1/users/jms/stats", {
})
let data = await response.json()

time.textContent = (data.data.human_readable_total)
let timper = data.data.is_coding_activity_visible
if (timper = 'true'){
	timper = 'Yes'
} else {
	timper = 'No'
}
current.textContent = (timper)





const wadu = document.getElementById('wadu');

let wait = await fetch("https://time.now/developer/api/timezone/Pacific/Auckland", {
})
let dataa = await wait.json()
const fish = dataa.datetime
let waduu = fish.slice(0,-19);
let fin = waduu.slice(11,13);
let fail = 'check'
if (Number(fin) >= 22) {
	fail = 'I should be'
}
else if (Number(fin) <= 7) {
	fail = 'I should be'
}
else if (Number(fin) <= 12) {
	fail = 'I might be still asleep'
}
else {
	fail = 'No'
}
wadu.textContent = (fail)
const observe = document.getElementById('observitory');
observe.addEventListener('click',() => {
    window.location.href = "/look"
});

