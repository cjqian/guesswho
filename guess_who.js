var DIRECTORY = "img/";
var EXTENSION = '.png';

var images = [];
for (var i = 0; i < 25; i++) {
	image_path = DIRECTORY + i + EXTENSION;
	images.push(image_path);
	
	document.getElementById('container').innerHTML +=
		`<div><a href=${image_path}>
		<img src=${image_link}/>
		</a></div>`;

};

console.log(images);
console.log("HELLO");
