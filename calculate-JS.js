var front = {
    a : function() { 
        //used for get and return data
        frontData = "";
        backGroundData = "";
        result = "";
        
        // used to judge the conditions
        onScreen = document.getElementById("equqtion").innerHTML;
        onBackGround = document.getElementById("background").innerHTML;
        judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
        searchAns = onScreen.search("Ans");
        judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
        judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
        dataLength = Number(String(onScreen).length);
        
        //Used in rightPare function specially
        countLeftPare = (onScreen.match(/\(/g) || []).length;
        countRightPare = (onScreen.match(/\)/g) || []).length;
        
        //Used in back function specially
        backDataLength = Number(String(onBackGround).length);
        
        
        π = Math.PI;
        Ans = Number(document.getElementById("result").innerHTML);
        Math.logBase10 = function(x) { return Math.LOG10E*Math.log(x); };
    },
}

function clearAll() {
    document.getElementById("equqtion").innerHTML = "";
    document.getElementById("background").innerHTML = "";
    console.log(document.getElementById("background").innerHTML);
    
}

function back() {
    front.a();
    
    if (judgeLastAns === 3 && searchAns != -1) {
        frontData = onScreen.substring(0,dataLength - 3);
        backGroundData = onBackGround.substring(0,backDataLength - 3);
        
    } else if( judgeLastString === "(" ) {
        frontData = onScreen.substring(0, Math.max(onScreen.lastIndexOf("+"),onScreen.lastIndexOf("-"),onScreen.lastIndexOf("×"),onScreen.lastIndexOf("÷"),onScreen.substring(0, onScreen.length - 1).lastIndexOf("("))+1);

        backGroundData = onBackGround.substring(0, Math.max(onBackGround.lastIndexOf("+"),onBackGround.lastIndexOf("-"),onBackGround.lastIndexOf("*"),onBackGround.lastIndexOf("\/"),onBackGround.substring(0, onBackGround.length - 1).lastIndexOf("("))+1);
        
    } else {
        frontData = onScreen.substring(0,dataLength - 1);
        backGroundData = onBackGround.substring(0,backDataLength - 1);
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function digit(e) { 
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if(judgeLastAns === 3 && searchAns != -1) {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    } else if(judgeLastString === "π") {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    } else if(isNaN(judgeLastString) === false || judgeLastString === ".") {
        frontData = onScreen + addAfterClick.substring(1,2);
        backGroundData = onBackGround + addBackData;  
    }else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;  
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(backGroundData);
}

function operator(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if (onScreen.length === 0 || judgeLastString === ".") {
        frontData = onScreen+ "0" + addAfterClick;
        backGroundData = onBackGround + "0" + addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen;
        backGroundData = onBackGround;
    
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } 
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function point(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;

    if (onScreen.length === 0) {
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(isNaN(judgeLastString)) {
        frontData = onScreen;
        backGroundData = onBackGround;
    } else  {
        if (onScreen.lastIndexOf(".") === -1) {
            frontData = onScreen + addAfterClick;
            backGroundData = onBackGround + addBackData;
        } else if(isNaN(judgeLastPoint)){
            frontData = onScreen + addAfterClick;
            backGroundData = onBackGround + addBackData;
        } else {
            frontData = onScreen;
            backGroundData = onBackGround;
        }
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function rightPare(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(" || onScreen.length === 0 || countLeftPare <= countRightPare) {
        frontData = onScreen;
        backGroundData = onBackGround;
        
    } else if (judgeLastString === "." ) {
        frontData = onScreen+ "0" + addAfterClick;
        backGroundData = onBackGround + "0" + addBackData;
        
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);

}

function leftPare(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;
    
    if( onScreen.length === 0 ) {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
        
    } else if (isNaN(judgeLastString) === false || judgeLastString === ")") {
        frontData = onScreen+ " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
        
    } else if (judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
        
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
    
    
}

function basicFunc(e) {
    front.a();
    var addAfterClick = e.value;
    var addBackData = e.name;

    if(judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
    } else if(onScreen.length === 0) {
        frontData = addAfterClick;
        backGroundData = addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function secFunc(e) {
    front.a();
    var addAfterClick = e.value + " (";
    var addBackData = e.name;

    if(judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
    } else if(onScreen.length === 0) {
        frontData = addAfterClick;
        backGroundData = addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function power10(e) {
    front.a();
    var addAfterClick = e.value.substring(0,5) + " (";
    var addBackData = e.name;
    
    if(judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
    } else if(onScreen.length === 0) {
        frontData = addAfterClick;
        backGroundData = addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
    
}

function powerExp(e) {
    front.a();
    var addAfterClick = e.value.substring(0,4) + " (";
    var addBackData = e.name;
    
    if(judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
    } else if(onScreen.length === 0) {
        frontData = addAfterClick;
        backGroundData = addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
    
}

function equal(e) {
    front.a();
    if(onScreen.length === 0) {
        result = "0";
        clearAll();
        
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷") {
        back();
        front.a();
        result = eval(onBackGround);
        clearAll();
        
    } else {
        result = eval(onBackGround);
        clearAll();
    }
    document.getElementById("result").innerHTML = result;
    
    console.log(document.getElementById("result").innerHTML);
}
