

let poop = document.querySelector('#contact')
poop.onclick = toggleClass;

function toggleClass(){
	if (poop.className == 'orange'){
		poop.className = 'dgrey'
	} else {
		poop.className = 'orange'
	}
}


function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
    setTimeout(function () {
        PopUp('show');
    }, 5000);

	

