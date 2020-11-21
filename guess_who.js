const DIRECTORY = './img/';
const VERSION = 'v1/';
const BLACK_IMAGE = DIRECTORY + 'black.jpg';
const EXTENSION = '.jpg';
const N_IMAGES = 24;
var images = [];
for (var i = 0; i < N_IMAGES; i++) {
	image_path = DIRECTORY + VERSION + i + EXTENSION;

	images.push(image_path);
	document.getElementById('container').innerHTML +=
		`<div class='card'>
			<img class='image' src=${image_path}>
		</div>`;
};
$('.card').click(function () {
	$(this).toggleClass('flipped');
	$(this).children().toggleClass('flipped')

});
