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
        
        // used to back functions
        //Due to there are a space after operator so we neeed to plus 1 after maxScLfuncIndex and maxBgLfuncIndex
        maxScLfuncIndex = Math.max(onScreen.lastIndexOf("+"), onScreen.lastIndexOf("-"), onScreen.lastIndexOf("×"), onScreen.lastIndexOf("÷"), onScreen.substring(0, onScreen.length - 1).lastIndexOf("("));
        remainScFunction = onScreen.substring(0, maxScLfuncIndex+1);
        
        maxBgLfuncIndex = Math.max(onBackGround.lastIndexOf("+"), onBackGround.lastIndexOf("-"), onBackGround.lastIndexOf("*"), onBackGround.lastIndexOf("\/"), onBackGround.substring(0, onBackGround.length - 1).lastIndexOf("("));
        remainBgFunction = onBackGround.substring(0, maxBgLfuncIndex+1);
        
        
        
        
        // used to factorial functions
        maxScLOperIndex = Math.max(onScreen.lastIndexOf("+"), onScreen.lastIndexOf("-"), onScreen.lastIndexOf("×"), onScreen.lastIndexOf("÷"), onScreen.lastIndexOf("("));
        //Due we already knowes the last string is numbers or not by (isNaN(judgeLastString)) condition in factorial functions, so add.replace(/!+/g, '') to reuse scAfLastOperatorTran in back function.
        scAfLastOperator = onScreen.substring(maxScLOperIndex+1, onScreen.length).replace(/!+/g, '');
        scAfLastOperatorTran = scAfLastOperator.replace(/\s+/g, '');

        maxBgLOperIndex = Math.max(onBackGround.lastIndexOf("+"), onBackGround.lastIndexOf("-"), onBackGround.lastIndexOf("*"), onBackGround.lastIndexOf("\/"), onBackGround.lastIndexOf("("), onBackGround.lastIndexOf(","));
        bgBfLastOperator = onBackGround.substring(0, maxBgLOperIndex+1);
        bgAfLastOperator = onBackGround.substring(maxBgLOperIndex+1, onBackGround.length)

        Fact = function(x) {
            var relevant=1;
            for (var i = 2; i <= x; i++)
            relevant = relevant * i;
            return relevant;
        };
        
        
        //used to pow function
        
        bgJudgeForPower = function() {
            var i = 0;
            do {
                i += 1;
                var aaa = onBackGround.substring(onBackGround.length - i, onBackGround.length);
                var bgCountLeftPare = (aaa.match(/\(/g) || []).length;
                var bgCountRightPare = (aaa.match(/\)/g) || []).length;
                console.log(i);
            } while (bgCountLeftPare < bgCountRightPare);
            return onBackGround.length - i;

        }
        
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
        frontData = onScreen.substring(0,dataLength - 4);
        backGroundData = onBackGround.substring(0,backDataLength - 3);
        
    } else if( judgeLastString === "(") {
        frontData = remainScFunction;
        backGroundData = remainBgFunction;
        
    } else if( judgeLastString === "!") {
        frontData = onScreen.substring(0,dataLength - 2);
        backGroundData = bgBfLastOperator + scAfLastOperatorTran;
        
    } else {
        frontData = onScreen.substring(0,dataLength - 2);
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
    } else if(judgeLastString === "π" || judgeLastString === ")" || judgeLastString === "!") {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;  
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
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
        
    } else if (isNaN(judgeLastString) === false || judgeLastString === ")" || judgeLastString === "!") {
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

function factorial(e) {
    front.a();
    var addAfterClick = e.value;
    
    if(isNaN(judgeLastString)) {
        // not number
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(maxScLOperIndex === -1 && scAfLastOperatorTran != parseInt(scAfLastOperatorTran,10)) {
        // not integer
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(maxScLOperIndex != -1 && scAfLastOperatorTran != parseInt(scAfLastOperatorTran,10)) {
        // not integer
        frontData = onScreen;
        backGroundData = onBackGround;
    } else {
        
        frontData = onScreen + addAfterClick.substring(2,4);
        backGroundData = bgBfLastOperator + Fact(scAfLastOperatorTran);
    }
    
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
}

function power10(e) {
    front.a();
    var addAfterClick = e.value.substring(0,5) + " (";
    var addBackData = e.name;
    if(onScreen.length === 0) {
        frontData = addAfterClick;
        backGroundData = addBackData;
    } else if(judgeLastString === ".") {
        frontData = onScreen+ " 0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
        
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

function power(e) {
    front.a();
    var addAfterClick = e.value.substring(2,4) + " (";
    var addBackData = e.name;
    
    if(onScreen.length === 0) {
        // not number
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(isNaN(judgeLastString) && judgeLastString != "π" && judgeLastString != ")" && judgeLastString != ".") {
        // not number
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(isNaN(judgeLastString) === false || judgeLastString === "π") {
        // not integer
        frontData = onScreen + addAfterClick;
        backGroundData = bgBfLastOperator + addBackData + bgAfLastOperator + ",";
    } else if(judgeLastString === ".") {
        // not integer
        frontData = onScreen + " 0" + addAfterClick;
        backGroundData = bgBfLastOperator + addBackData + bgAfLastOperator + "0,";
    } else {
        // Judge the special "(" to be the remaining bg data after press x^y or 10^y button
        if(countLeftPare === countRightPare) {
            frontData = onScreen + addAfterClick;
            backGroundData = addBackData + onBackGround + ",";
            
        } else {
            frontData = onScreen + addAfterClick;
            backGroundData = onBackGround.substring(0,bgJudgeForPower()) + addBackData + onBackGround.substring(bgJudgeForPower(),onBackGround.length) + ",";
        }
        
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
