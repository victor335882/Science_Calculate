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
        
        maxBgLfuncIndex = Math.max(onBackGround.lastIndexOf("+"), onBackGround.lastIndexOf("-"), onBackGround.lastIndexOf("*"), onBackGround.lastIndexOf("\/"), onBackGround.substring(0, onBackGround.lastIndexOf("(") - 1).lastIndexOf("("));
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
        
       
        
        
        //used to pow functions
        
        bgJudgeBetLeftAndRight = function() {
            var i = 0;
            do {
                i += 1;
                var aaa = onBackGround.substring(onBackGround.length - i, onBackGround.length);
                var bgCountLeftPare = (aaa.match(/\(/g) || []).length;
                var bgCountRightPare = (aaa.match(/\)/g) || []).length;
 
            } while (bgCountLeftPare < bgCountRightPare);
            return onBackGround.length - i;

        }
        
        //used to back pow functions
        bgJudgeBetLeftAndRight2 = function() {
            var i = 0;
            do {
                i += 1;
                var bgDeleteSpecChar = onBackGround.length - 1;
                var bbb = onBackGround.substring(bgDeleteSpecChar - i, bgDeleteSpecChar);
                var bgCountLeftPare2 = (bbb.match(/\(/g) || []).length;
                var bgCountRightPare2 = (bbb.match(/\)/g) || []).length;

            } while (bgCountLeftPare2 < bgCountRightPare2);
            
            return bgDeleteSpecChar - i;
        }
        
        bgBetLeftAndRight2 = onBackGround.substring(bgJudgeBetLeftAndRight2(),onBackGround.length - 1)
        
        maxBgLfuncIndex2 = Math.max(onBackGround.substring(0,bgJudgeBetLeftAndRight2())
.lastIndexOf("+"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("-"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("*"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("\/"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).substring(0, onBackGround.lastIndexOf("(") - 1).lastIndexOf("("));
        remainBgFunction2 = onBackGround.substring(0, maxBgLfuncIndex2+1);
        
        //used to factorial functions
        
        scJudgeBetLeftAndRight = function() {
            var i = 0;
            do {
                i += 1;
                var scDeleteSpecChar = onScreen.length - 2;
                var ccc = onScreen.substring(scDeleteSpecChar - i, scDeleteSpecChar);
                var scCountLeftPare = (ccc.match(/\(/g) || []).length;
                var scCountRightPare = (ccc.match(/\)/g) || []).length;
 
            } while (scCountLeftPare < scCountRightPare);
            return scDeleteSpecChar - i;

        }
        scBetLeftAndRight = onScreen.substring(scJudgeBetLeftAndRight(),onScreen.length - 2)
        scBetLeftAndRightTran1 = scBetLeftAndRight.replace(/\s+/g, '');
        scBetLeftAndRightTran2 = scBetLeftAndRightTran1.replace(/×/g, '*');
        scBetLeftAndRightTran3 = scBetLeftAndRightTran2.replace(/÷/g, '/');
        
        bgBetLeft = onBackGround.substring(0,bgJudgeBetLeftAndRight());
        
        
        
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
        
        if(onScreen.substring(onScreen.length - 3, onScreen.length - 2) === "^") {
            if(onScreen.substring(onScreen.length - 5, onScreen.length - 4) === ")") {
                frontData = onScreen.substring(0,dataLength - 4);
                backGroundData = remainBgFunction2 + bgBetLeftAndRight2;
            } else {
                frontData = onScreen.substring(0,dataLength - 4);
                backGroundData = remainBgFunction + onBackGround.substring(onBackGround.lastIndexOf("(")+1,onBackGround.length-1);
            }
            
        } else {
            frontData = remainScFunction;
            backGroundData = remainBgFunction;
        }
    } else if( judgeLastString === "!") {
        frontData = onScreen.substring(0,dataLength - 2);
        backGroundData = bgBetLeft + scBetLeftAndRightTran3;
        
    } else {
        frontData = onScreen.substring(0,dataLength - 2);
        backGroundData = onBackGround.substring(0,backDataLength - 1);
    }
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);
    console.log(scJudgeBetLeftAndRight());
    console.log(onScreen.length);
    
   

 

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
    
    if(isNaN(judgeLastString) && judgeLastString != ")") {
        // not number
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(scAfLastOperatorTran != parseInt(scAfLastOperatorTran,10) && judgeLastString != ")") {
        // not integer
        frontData = onScreen;
        backGroundData = onBackGround;
    } else if(judgeLastString === ")") {
        if(eval(onBackGround.substring(bgJudgeBetLeftAndRight(),onBackGround.length)) != parseInt(eval(onBackGround.substring(bgJudgeBetLeftAndRight(),onBackGround.length)),10)) {
            frontData = onScreen;
            backGroundData = onBackGround;
        } else {
            frontData = onScreen + addAfterClick.substring(2,4);
            backGroundData = onBackGround.substring(0,bgJudgeBetLeftAndRight()) + "(" +  Fact(eval(onBackGround.substring(bgJudgeBetLeftAndRight(),onBackGround.length))) +")";
        }
    } else {
        frontData = onScreen + addAfterClick.substring(2,4);
        backGroundData = bgBfLastOperator + "(" + Fact(scAfLastOperatorTran) +")";
    }
    
    document.getElementById("equqtion").innerHTML = frontData;
    document.getElementById("background").innerHTML = backGroundData;
    
    console.log(document.getElementById("background").innerHTML);

}

function power10(e) {
    front.a();
    var addAfterClick = e.value.substring(0,6) + " (";
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
        
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround.substring(0,bgJudgeBetLeftAndRight()) + addBackData + onBackGround.substring(bgJudgeBetLeftAndRight(),onBackGround.length) + ",";
        
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
