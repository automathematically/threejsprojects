function init() {
	var scene = new THREE.Scene();

	var geometry = new THREE.BoxGeometry(1,1,1);

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

init();