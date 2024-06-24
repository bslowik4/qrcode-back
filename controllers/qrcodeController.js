const QRCode = require('qrcode-generator');

const generateQRCode = (text) => {
    const qr = QRCode(0, 'H');
    qr.addData(text);
    qr.make();
    const svg = qr.createSvgTag({ margin: 2, scalable: true });

    return svg;
};

module.exports = {
    generateQRCode,
};