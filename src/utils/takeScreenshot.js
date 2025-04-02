import html2canvas from "html2canvas";

const takeScreenShot = (targetDiv, fileName = "screenshot.png") => {
	const target = document.getElementById(targetDiv);

	if (!target) {
		console.error("Screenshot target not found!");
		return;
	} else {
		html2canvas(target).then((canvas) => {
			const imgUrl = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = imgUrl;
			link.download = fileName;
			link.click();
		});
	}
};

export default takeScreenShot;
