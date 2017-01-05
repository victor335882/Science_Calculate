function digit(e) {
  
    var displayDigit;
    var onScreen = document.getElementById("resultScreen").innerHTML;
    var addAfterClick = document.getElementsByName("digit"+e.value)[0].value;
    
    displayDigit = onScreen + addAfterClick;  
    
    document.getElementById("resultScreen").innerHTML = displayDigit;
  
}