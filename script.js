const form = document.querySelector('#form');
const output = document.querySelector('#qrcode');
const spinner = document.querySelector('#loading');
const qrcodeElement = document.querySelector('#output');

function generateQRCode(e) {
  e.preventDefault();
  console.log('Generating QR Code...');
  const url = document.querySelector('#url');
  const size = document.querySelector('#size');
  const color = document.querySelector('#color');
  const background = document.querySelector('#background');
  console.log(url.value, size.value, color.value, background.value);

  if (url.value === '') {
    alert('Please enter a URL');
  }
  else {
    
    spinner.style.display = 'flex';
    
    setTimeout(() => { 
      spinner.style.display = 'none';
      qrcodeElement.innerHTML = "";
      const qrcode = new QRCode('output', {
        text: url.value,
        width: size.value,
        height: size.value,
        colorDark: color.value,
        colorLight: background.value,
        correctLevel: QRCode.CorrectLevel.H
      });
      }, 2000)
   
  }

}

form.addEventListener('submit', generateQRCode);