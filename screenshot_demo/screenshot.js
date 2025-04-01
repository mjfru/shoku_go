const captureBtn = document.getElementById("capture-btn");
const captureDiv = document.getElementById("capture-div");

const takeScreenshot = () => {
	if (!captureDiv) {
		console.error("Element not found!");
		return;
	} else {
		// eslint-disable-next-line no-undef
		html2canvas(captureDiv).then((canvas) => {
			const imgUrl = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = imgUrl;
			link.download = "screenshot.png";
			link.click();
		});
	}
};

captureBtn.addEventListener("click", takeScreenshot);
