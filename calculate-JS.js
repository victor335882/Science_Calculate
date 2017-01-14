var front = {
    a : function() {  
        onScreen = document.getElementById("equqtion").innerHTML;
        onBackGround = document.getElementById("background").innerHTML;
        judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
        searchAns = onScreen.search("Ans");
        judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
        judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
        dataLength = Number(String(onScreen).length);
        
        π = Math.PI;
        Ans = Number(document.getElementById("result").innerHTML);
        
    }
}

function clearAll() {
    document.getElementById("equqtion").innerHTML = "";
    document.getElementById("background").innerHTML = "";
    console.log(document.getElementById("background").innerHTML);
}

function back() {
    front.a();
    if (judgeLastAns === 3) {
        if(searchAns === -1) {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
            document.getElementById("background").innerHTML = onScreen.substring(0,dataLength - 1);
        } else {
            document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 3);
            document.getElementById("background").innerHTML = onScreen.substring(0,dataLength - 3);
        }  
    } else {
        document.getElementById("equqtion").innerHTML = onScreen.substring(0,dataLength - 1);
        document.getElementById("background").innerHTML = onScreen.substring(0,dataLength - 1);
    }
    console.log(document.getElementById("background").innerHTML);
}

function digit(e) { 
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if( judgeLastAns === 3) {
        if(searchAns === -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        } else {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
        } 
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else{
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + addBackData;  
    }
    
    console.log(document.getElementById("background").innerHTML);
}

function operator(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = "0" + addAfterClick;
        document.getElementById("background").innerHTML = "0" + addBackData;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + addBackData;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + addBackData;
    } else if(judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen;
            document.getElementById("background").innerHTML = onBackGround;
        }
    } else {
        document.getElementById("equqtion").innerHTML = onScreen;
        document.getElementById("background").innerHTML = onBackGround;
    }
    
    console.log(document.getElementById("background").innerHTML);
}

function pi(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;

    if(judgeLastString === ".") {
        document.getElementById("equqtion").innerHTML = onScreen;
        document.getElementById("background").innerHTML = onBackGround;
    } else if(onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = addAfterClick;
        document.getElementById("background").innerHTML = addBackData;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else if(judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        }
    } else if(judgeLastString === ")"){
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + addBackData;
    }
    
    console.log(document.getElementById("background").innerHTML);
}

function point(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;

    if (onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = onScreen;
        document.getElementById("background").innerHTML = onBackGround;
    } else if(isNaN(judgeLastString)) {
        document.getElementById("equqtion").innerHTML = onScreen;
        document.getElementById("background").innerHTML = onBackGround;
    } else  {
        if (onScreen.lastIndexOf(".") === -1) {
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        } else if(isNaN(judgeLastPoint)){
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        } else {
            document.getElementById("equqtion").innerHTML = onScreen;
            document.getElementById("background").innerHTML = onBackGround;
        }
    }
    
    console.log(document.getElementById("background").innerHTML);
}

function answer(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;

    if(judgeLastString === ".") {
        document.getElementById("equqtion").innerHTML = onScreen;
        document.getElementById("background").innerHTML = onBackGround;
    } else if(onScreen.length === 0) {
        document.getElementById("equqtion").innerHTML = addAfterClick;
        document.getElementById("background").innerHTML = addBackData;
    } else if(isNaN(judgeLastString) === false) {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else if(judgeLastString === "π") {
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else if(judgeLastAns === 3) {
        if(searchAns != -1) {
            document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
        } else {     
            document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
            document.getElementById("background").innerHTML = onBackGround + addBackData;
        }
    } else if(judgeLastString === ")"){
        document.getElementById("equqtion").innerHTML = onScreen + "×" + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + "*" + addBackData;
    } else {
        document.getElementById("equqtion").innerHTML = onScreen + addAfterClick;
        document.getElementById("background").innerHTML = onBackGround + addBackData;
    }
    console.log(document.getElementById("background").innerHTML);

}

function equal(e) {
    front.a();
    if(onScreen.length === 0) {
        document.getElementById("result").innerHTML = "0";
        document.getElementById("equqtion").innerHTML = "";
        
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷") {
        back();
        front.a();
        document.getElementById("result").innerHTML = eval(onBackGround);
        document.getElementById("equqtion").innerHTML = "";
        
    } else {
        document.getElementById("result").innerHTML = eval(onBackGround);
        document.getElementById("equqtion").innerHTML = "";
    }
    console.log(document.getElementById("result").innerHTML);
}