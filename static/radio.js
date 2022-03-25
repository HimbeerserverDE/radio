async function play() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/song");
	xhr.onload = _ => {
		let audio = document.querySelector("#audio");
		audio.src = "/static/song/" + song;
		audio.play();
	};
	xhr.send();
}

document.querySelector("#audio").addEventListener("ended", play);
play();
