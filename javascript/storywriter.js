let fontList = [
	"Cedarville Cursive",
	"Comforter",
	"Fuzzy Bubbles",
	"Hi Melody",
	"Leckerli One",
	"Pacifico",
	"Permanent Marker",
	"Yellowtail",
];
let i = 0;
function changeStorywriterFont() {
	let test = document.getElementById("storywriter");
	test.style.fontFamily = fontList[i % 8];

	i++;
}

window.onload = setInterval(changeStorywriterFont, 3000);
