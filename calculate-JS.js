function digit(e) {
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var addAfterClick = document.getElementsByName("digit"+e.value)[0].value;
    displayDigit = onScreen + addAfterClick;  
    document.getElementById("resultScreen").innerHTML = displayDigit;
    
}

function clearAll() {
    var clear = "";
    document.getElementById("resultScreen").innerHTML = clear;
    
}

function back() {
    var data = document.getElementById("resultScreen").innerHTML;
    var dataLength = String(Number(String(data).length)-1);
    var dataBack= data.substring(0,dataLength);
    document.getElementById("resultScreen").innerHTML = dataBack;
    
}
