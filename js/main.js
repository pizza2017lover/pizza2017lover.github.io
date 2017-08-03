let image = document.querySelector('#contact')
image.onclick = toggleClass();

function toggleClass(){
	if (image.className = 'orange') {
		image.className = 'dgrey'
	} else {
		image.className = 'orange'
	}
}
