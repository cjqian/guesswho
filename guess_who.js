var DIRECTORY = './img/';
var VERSION = 'v1/';
var BLACK_IMAGE = DIRECTORY + 'black.jpg';
var EXTENSION = '.jpg';
var N_IMAGES = 24;
var images = [];

function getImageFromIndex(i) {
	var image_path = DIRECTORY + VERSION + i + EXTENSION;
	return image_path;
};

function loadImages() {
	for (var i = 0; i < N_IMAGES; i++) {
		image_path = getImageFromIndex(i);
		images.push(image_path);
		document.getElementById('container').innerHTML +=
			`<div class=''>
				<img class='image' src=${image_path}>
			</div>`;
	};
};
loadImages();

// Load .myPerson with a random person.
function loadMyPerson() {
	var idx = Math.floor(Math.random() * N_IMAGES);
	var image_path = getImageFromIndex(idx);

	document.getElementById('myPerson').innerHTML +=
		`<div class='card'>
			<img class='image' src=${image_path}>
		</div>`;

};
loadMyPerson();

$('.card').click(function () {
	$(this).toggleClass('flipped');
	$(this).children().toggleClass('flipped')

});
