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

function digit(e) {
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length)
    var addAfterClick = document.getElementsByName("digit"+e.value)[0].value;  
    
    if (onScreen.length > 18) {
        //Limit the maximum digit numbers
        displayDigit = onScreen;  
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;  
  
    } else{
        displayDigit = onScreen + addAfterClick;  
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    }
       
}

function operator(e) {
    
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
        
    if (onScreen.length > 18) {
        //Limit the maximum digit numbers
        displayDigit = onScreen;  
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    } else if (onScreen.length === 0) {
        //statement of if must be "===", or browser can't compare 
        // If there is no content on "onScreen"
        displayDigit = "0" + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    } else if(isNaN(judgeLastString) === false) {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;  
     
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;  
  
    } else {
        // If the last contents of "onScreen" is not Number,and length more then 18
        displayDigit = onScreen;
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    }
    
}

function pi(e) {
    
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    console.log(e.value);
    if (onScreen.length > 18) {
        displayDigit = onScreen;  
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;  
        
    } else {
        // If the last contents of "onScreen" is not Number,and length more then 18
        displayDigit = onScreen + addAfterClick;
        document.getElementById("resultScreen").innerHTML = displayDigit;
        
    }
}