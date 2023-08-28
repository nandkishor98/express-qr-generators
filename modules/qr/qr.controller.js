const QRCode = require("qrcode");

const createQR = async (url) => {
    const qrData = QRCode.toDataURL(url);
    return qrData;
};

module.exports = { createQR };