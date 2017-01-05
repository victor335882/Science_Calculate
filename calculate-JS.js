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
    var dataLength = Number(String(data).length)-1;
    var dataBack= data.substring(0,dataLength);
    document.getElementById("resultScreen").innerHTML = dataBack;
    
}

function operator(e) {
    
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var onScreenLength = onScreen.length
    var judgeLastString = onScreen.substring(onScreenLength - 1, onScreenLength);
    var addAfterClick = e.value;
    
    //statement of if must be "==", or browser can't compare 
    if (onScreenLength == 0) {
        // If there is no content on "onScreen",
        displayDigit = "0" + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;
     
    }  else if(isNaN(judgeLastString)) {
        // If the last contents of "onScreen" is not Number,
        displayDigit = onScreen;
        document.getElementById("resultScreen").innerHTML = displayDigit;    
    }else {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;
    } 
}