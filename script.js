// script.js
document.getElementById('downloadLink').addEventListener('click', function() {
    var image = document.getElementById('myImage');
    this.href = image.src;
});

