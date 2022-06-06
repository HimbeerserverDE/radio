async function play() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/song");
	xhr.onload = _ => {
		if (xhr.status === 200) {
			let audio = document.querySelector("#audio");
			audio.src = "/static/song/" + xhr.responseText;
			audio.play();

			document.querySelector("#title").innerText = xhr.responseText;
		} else if (xhr.status === 404) {
			alert("No songs found!");
		} else {
			alert("Unknown error!");
		}
	};
	xhr.send();
}

document.querySelector("#audio").addEventListener("ended", play);
play();
