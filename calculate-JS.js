function clearAll() {
    var clear = "";
    document.getElementById("equqtion").innerHTML = clear;
}

function back() {
    var data = document.getElementById("equqtion").innerHTML;
    var dataLength = Number(String(data).length)-1;
    var dataBack= data.substring(0,dataLength);
    document.getElementById("equqtion").innerHTML = dataBack;
}

function digit(e) { 
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;  
    
    if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else{
        displayDigit = onScreen + addAfterClick;  
        document.getElementById("equqtion").innerHTML = displayDigit;
    }

}

function operator(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    if (onScreen.length === 0) {
        //statement of if must be "===", or browser can't compare 
        // If there is no content on "onScreen"
        displayDigit = "0" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
    } else if(isNaN(judgeLastString) === false) {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else {
        // If the last contents of "onScreen" is not Number,and length more then 18
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
    }

}

function pi(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else if(judgeLastString === ".") {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
    }

}

function point(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
    var addAfterClick = e.value;
    if (onScreen.length === 0) {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
    } else if(isNaN(judgeLastString)) {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;  
    } else  {
        if ( onScreen.lastIndexOf(".") === -1) {
            displayDigit = onScreen+ addAfterClick;
            document.getElementById("equqtion").innerHTML = displayDigit;
        } else if ( isNaN(judgeLastPoint) === false) {
            displayDigit = onScreen;
            document.getElementById("equqtion").innerHTML = displayDigit;
        } else {
            displayDigit = onScreen+ addAfterClick;
            document.getElementById("equqtion").innerHTML = displayDigit;
        }
    }
}
