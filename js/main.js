

let poop = document.querySelector('#contact')
poop.onclick = toggleClass;

function toggleClass(){
	if (poop.className == 'orange'){
		poop.className = 'dgrey'
	} else {
		poop.className = 'orange'
	}
}
