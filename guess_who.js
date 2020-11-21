const DIRECTORY = './img/';
const VERSION = 'v1/';
const BLACK_IMAGE = DIRECTORY + 'black.jpg';
const EXTENSION = '.jpg';
const N_IMAGES = 24;
const COLS = 6;
const ROWS = N_IMAGES / COLS;

let images = [];
let html = `<div class='grid'>`;
for (let row = 0; row < ROWS; row++) {
	html += `<div class='row'>`;
	for (let col = 0; col < COLS; col++) {
		index = row * COLS + col;
		image_path = DIRECTORY + VERSION + index + EXTENSION;

		images.push(image_path);
		html += `<span class='card'>
					<img class='image' src=${image_path}>
				</span>`;
	}
	html += `</div>`;
}
html += `</div>`;
document.getElementById('container').innerHTML = html;

$('.card').click(function () {
	$(this).toggleClass('flipped');
	$(this).children().toggleClass('flipped')

});
