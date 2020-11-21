const DIRECTORY = './img/';
const VERSION = 'v1/';
const BLACK_IMAGE = DIRECTORY + 'black.jpg';
const EXTENSION = '.jpg';
const N_IMAGES = 24;
const COLS = 6;
const ROWS = N_IMAGES / COLS;

function getImagePathFromIndex(i) {
	var image_path = DIRECTORY + VERSION + i + EXTENSION;
	return image_path;
};

function loadImages() {
	let html = `<div class='grid'>`;
	const myPersonIndex = Math.floor(Math.random() * N_IMAGES);
	const myPersonPath = getImagePathFromIndex(myPersonIndex);

	for (let row = 0; row < ROWS; row++) {
		html += `<div class='row'>`;
		for (let col = 0; col < COLS; col++) {
			index = row * COLS + col;
			image_path = DIRECTORY + VERSION + index + EXTENSION;

			html += `<span class='card'>
						<img class='image' src=${image_path}>
					</span>`;
		}
		if (row === 0) {
			html += `<span class='my-card-col my-character-text'>?? My Character ?? </span>`;
		} else if (row === 1) {
			html +=
				`<span class='my-card-col my-card'>
					<img class='my-image' src=${myPersonPath}>
				</span>`;
		} else {
			html += `<span class='my-card-col'></span>`;
		}
		html += `</div>`;
	}
	html += `</div>`;
	document.getElementById('container').innerHTML = html;

	$('.card').click(function () {
		$(this).toggleClass('flipped');
		$(this).children().toggleClass('flipped')
	});
}
loadImages();
