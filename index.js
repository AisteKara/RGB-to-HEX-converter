function convert() {
    red = parseInt(document.getElementById('red').value);
    green = parseInt(document.getElementById('green').value);
    blue = parseInt(document.getElementById('blue').value);

    hexCode = red.toString(16) + green.toString(16) + blue.toString(16);
    hexCode = "#" + hexCode.toUpperCase();
    document.getElementById('hex').innerHTML = hexCode;    
    return false;
}
