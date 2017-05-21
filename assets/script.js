document.getElementById('who').addEventListener('click', helpme);

function helpme() {
	var arrow = document.getElementById('help');
	arrow.classList.toggle('show');
}