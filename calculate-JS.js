var front = {
    a : function() {  
        onScreen = document.getElementById("equqtion").innerHTML;
        judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
        searchAns = onScreen.search("Ans");
        judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
        judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
        dataLength = Number(String(onScreen).length);
    }
}

function clearAll() {
    document.getElementById("equqtion").innerHTML = "";
}

function back() {
    front.a();
    if (judgeLastAns === 3) {
        if(searchAns === -1) {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
        } else {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 3);
        }  
    } else {
        document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
    }
    
    return document.getElementById("equqtion").innerHTML;
}

function digit(e) { 
    front.a();
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
    front.a();
    var addAfterClick = e.value;
    
    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = "0" + addAfterClick;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
    } else if(judgeLastAns === 3) {
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
    front.a();
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
    front.a();
    var addAfterClick = e.value;

    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else if(isNaN(judgeLastString)) {
        document.getElementById("equqtion").innerHTML = onScreen;
    } else  {
        if (onScreen.lastIndexOf(".") === -1) {
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
    front.a();
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