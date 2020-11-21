console.log("BEGINNING");
var DIRECTORY = "./img/";
var VERSION = "v1/";
var BLACK_IMAGE = DIRECTORY + "black.jpg";
var EXTENSION = '.jpg';
var N_IMAGES = 24;
console.log("ASDFASDF");
var images = [];
for (var i = 0; i < N_IMAGES; i++) {
	image_path = DIRECTORY + VERSION + i + EXTENSION;

	images.push(image_path);
	document.getElementById('container').innerHTML +=
		`<div>
		<img class='card' src=${image_path}>
		</a></div>`;
};
console.log("TESTING");
$(".card").click(function(){
	$(this).toggleClass("flipped");
});

console.log('asdf');
console.log(images);
