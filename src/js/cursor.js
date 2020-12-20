import {
	gsap
} from "gsap";

let elementCursorLittle = document.getElementsByClassName("cursor-little");
let elementCursorBig = document.getElementsByClassName("cursor-big");

function moveCursor(e) {
	var render = function render() {
		gsap.set(elementCursorLittle, {
			x: e.clientX,
			y: e.clientY
		});
		gsap.set(elementCursorBig, {
			x: e.clientX,
			y: e.clientY
		});
	};

	requestAnimationFrame(render);
}

document.addEventListener("mousemove", e => {
	moveCursor(e);
});