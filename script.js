const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById(url).value;
    const size = document.getElementById(size).value;

    if (url === '') {
        alert('Please enter a valid URL');
    } 
    else{
        generateQRCode(url, size);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

const clearUI = () => {
    qr.innerHTML = '';
}


form.addEventListener('submit', onGenerateSubmit);
