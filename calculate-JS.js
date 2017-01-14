var onScreen = document.getElementById("equqtion").innerHTML;
var judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
var searchAns = onScreen.search("Ans");
var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
var judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
var dataLength = Number(String(onScreen).length);

function frount() {  
    onScreen = document.getElementById("equqtion").innerHTML;
    judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
    searchAns = onScreen.search("Ans");
    judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
    dataLength = Number(String(onScreen).length);
}

function clearAll() {
    var clear = "";
    document.getElementById("equqtion").innerHTML = clear;
}

function back() {
    frount();
    if ( judgeLastAns === 3) {
        if(searchAns === -1) {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
        } else {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 3);
        }  
    } else {
        document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
    }
    console.log(onScreen);
    return document.getElementById("equqtion").innerHTML;
}

function digit(e) { 
    frount();
    var addAfterClick = e.value;
    if( judgeLastAns === 3) {
        if(searchAns === -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;  
        } else {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;;
        } 
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else{
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;  
    }

    return document.getElementById("equqtion").innerHTML;
}

function operator(e) {
    frount();
    var addAfterClick = e.value;
    
    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = "0" + addAfterClick;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    } else if( judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen;
        }
    } else {
        document.getElementById("equqtion").innerHTML = onScreen;
    }
    
    return document.getElementById("equqtion").innerHTML;
}

function pi(e) {
    frount();
    var addAfterClick = e.value;

    if(judgeLastString === ".") {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else if(onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = addAfterClick;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else if(judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;  
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        }
    } else if(judgeLastString === ")"){
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    } 
    
    return document.getElementById("equqtion").innerHTML;
}

function point(e) {
    frount();
    var addAfterClick = e.value;

    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else if(isNaN(judgeLastString)) {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else  {
        if ( onScreen.lastIndexOf(".") === -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        } else if(isNaN(judgeLastPoint)){
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        } else {
            document.getElementById("equqtion").innerHTML = onScreen;
        }
    }
    
    return document.getElementById("equqtion").innerHTML;
}

function answer(e) {
    frount();
    var addAfterClick = e.value;

    if(judgeLastString === ".") {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else if(judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;  
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        }
    } else if(judgeLastString === ")"){
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
    } else {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    }
    
    return document.getElementById("equqtion").innerHTML;
}







function equal(e) {
    var onScreen = document.getElementById("equqtion").innerHTML;
    console.log(eval(onScreen));
}