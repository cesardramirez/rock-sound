window.onload = function() {
	var guitarra = document.getElementById('contenedor');
	guitarra.addEventListener('mouseenter', function() {
		var audio = new Audio('js/strum-guitar.mp3');
		audio.play();
	});
}