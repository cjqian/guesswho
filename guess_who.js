const DIRECTORY = './img/';
const VERSION = 'v1/';
const BLACK_IMAGE = DIRECTORY + 'black.jpg';
const EXTENSION = '.jpg';
const N_IMAGES = 24;
const COLS = 6;
const ROWS = N_IMAGES / COLS;
let images = [];

function getImagePathFromIndex(i) {
	var image_path = DIRECTORY + VERSION + i + EXTENSION;
	return image_path;
};

function loadImages() {
	for (let row = 0; row < ROWS; row++) {
		for (let col = 0; col < COLS; col++) {
			index = row * COLS + col;
			image_path = getImagePathFromIndex(index);

			images.push(image_path);
			document.getElementById('container').innerHTML +=
				`<span class='card'>
					<img class='image' src=${image_path}>
				</span>`;
		}
		document.getElementById('container').innerHTML += `<br>`;
	};
};
loadImages();

// Load .myPerson with a random person.
function loadMyPerson() {
	var idx = Math.floor(Math.random() * N_IMAGES);
	var image_path = getImagePathFromIndex(idx);

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
