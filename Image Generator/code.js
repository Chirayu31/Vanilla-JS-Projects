const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');

const imageData1 = ctx1.createImageData(1000, 1000);
const imageData2 = ctx2.createImageData(1000, 1000);
const imageData3 = ctx3.createImageData(1000, 1000);


var arr = [0, 255];

var x = arr[Math.floor(Math.random() * (1 - 0 + 1)) + 0];

// Iterate through every pixel
for (let i = 0; i < imageData1.data.length; i += 4) {
    // Modify pixel data


    if (i % 3 === 0) {
        imageData1.data[i + 0] = 0;  // R value
        imageData1.data[i + 1] = 0;    // G value
        imageData1.data[i + 2] = 0;  // B value
        imageData1.data[i + 3] = 255;  // A value
        x = arr[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
    } else if (i % 5 == 0) {
        imageData1.data[i + 0] = 255;  // R value
        imageData1.data[i + 1] = 255;    // G value
        imageData1.data[i + 2] = 255;  // B value
        imageData1.data[i + 3] = 255;  // A value
    }

}
let y = Math.floor(Math.random() * 255)
for (let i = 0; i < imageData2.data.length; i += 4) {
    // Modify pixel data
    imageData2.data[i + 0] = x - y + 100;  // R value
    imageData2.data[i + 1] = x - y + 100;    // G value
    imageData2.data[i + 2] = x - y - 10;  // B value
    imageData2.data[i + 3] = 255;  // A value

    if (i % 2000 === 0) {
        x = arr[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
        let y = Math.floor(Math.random() * 255);

    }

}

for (let i = 0; i < imageData3.data.length; i += 4) {
    // Modify pixel data
    imageData3.data[i + 0] = (imageData1.data[i + 0] + imageData2.data[i + 0]) / 2;  // R value
    imageData3.data[i + 1] = (imageData1.data[i + 1] - imageData2.data[i + 1]) / 2;    // G value
    imageData3.data[i + 2] = (imageData1.data[i + 2] + imageData2.data[i + 2]) / 2;  // B value
    imageData3.data[i + 3] = 255;  // A value

}

// Draw image data to the canvas
ctx1.putImageData(imageData1, 20, 20);
ctx2.putImageData(imageData2, 20, 20);
ctx3.putImageData(imageData3, 20, 20);