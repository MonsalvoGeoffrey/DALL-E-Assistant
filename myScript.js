// document.getElementById("myBtn").addEventListener("click", () => {
//     window.test.log();
// })


async function copyImageToClipboard(image) {
    // const image = document.getElementById('myImage');
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    canvas.toBlob(function (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
    }, 'image/png');
}