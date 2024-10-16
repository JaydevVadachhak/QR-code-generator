const qrText = document.getElementById("qr-text");
const generateButton = document.getElementById("generate-button");
const qrCodeContainer = document.getElementById("qr-code");
const exportJPEGButton = document.getElementById("export-jpeg");
const qrcode = new QRCode(qrCodeContainer, {
    width: 200,
    height: 200,
});

function exportQRCode(format) {
    if (qrText.value.trim() === '') {
        alert("Please generate a QR code first.");
        return;
    }
    html2canvas(qrCodeContainer).then((canvas) => {
        const image = canvas.toDataURL(`image/${format}`);
        const a = document.createElement("a");
        a.href = image;
        a.download = `qrcode.${format}`;
        a.click();
    });
}

generateButton.addEventListener("click", () => {
    const text = qrText.value.trim();
    if (text !== "") {
        qrcode.makeCode(text);
    } else {
        alert("Please enter text to generate a QR code.");
    }
});

exportJPEGButton.addEventListener("click", () => {
    exportQRCode("jpg");
});

