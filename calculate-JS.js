var category = {
    
    basicVariable : function() {
        frontData = "";
        backGroundData = "";
        evalResult = "";
        onScreen = document.getElementById("equqtion").innerHTML;
        onBackGround = document.getElementById("background").innerHTML;
        judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
        judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
        searchAns = onScreen.search("Ans");
        
    },
    point : function() {
        
        scLastOperatorPos = maxScLfuncIndex = Math.max(onScreen.lastIndexOf("+"), onScreen.lastIndexOf("-"), onScreen.lastIndexOf("×"), onScreen.lastIndexOf("÷"), onScreen.lastIndexOf("("), onScreen.lastIndexOf(")"));
        
        lastPointPos = onScreen.lastIndexOf(".");
        
    },
    parentheses : function() {
        countLeftPare = (onScreen.match(/\(/g) || []).length;
        countRightPare = (onScreen.match(/\)/g) || []).length;
    },
    specialMath : function() {
        Ans = Number(document.getElementById("result").innerHTML);
        π = Math.PI;
        Math.logBase10 = function(x) { return Math.LOG10E*Math.log(x); };
    },
    powerAndFactorial : function() {
        maxBgLOperIndex = Math.max(onBackGround.lastIndexOf("+"), onBackGround.lastIndexOf("-"), onBackGround.lastIndexOf("*"), onBackGround.lastIndexOf("\/"), onBackGround.lastIndexOf("("), onBackGround.lastIndexOf(","));
        bgBfLastOperator = onBackGround.substring(0, maxBgLOperIndex+1);
        bgAfLastOperator = onBackGround.substring(maxBgLOperIndex+1, onBackGround.length);
        
        bgJudgeBetLeftAndRight = function() {
            var i = 0;
            do {
                i += 1;
                var aaa = onBackGround.substring(onBackGround.length - i, onBackGround.length);
                var bgCountLeftPare = (aaa.match(/\(/g) || []).length;
                var bgCountRightPare = (aaa.match(/\)/g) || []).length;
 
            } while (bgCountLeftPare < bgCountRightPare);
            return onBackGround.length - i;
        };
        
        bgBefLeftparen = onBackGround.substring(0,bgJudgeBetLeftAndRight());
        bgBetparen = onBackGround.substring(bgJudgeBetLeftAndRight(),onBackGround.length);
        
    },
    onlyFactorial : function() {
        //Due we already knowes the last string is numbers or not by (isNaN(judgeLastString)) condition in factorial functions, so add.replace(/!+/g, '') to reuse scAfLastOperatorTran in back function.
        maxScLOperIndex = Math.max(onScreen.lastIndexOf("+"), onScreen.lastIndexOf("-"), onScreen.lastIndexOf("×"), onScreen.lastIndexOf("÷"), onScreen.lastIndexOf("("));
        scAfLastOperator = onScreen.substring(maxScLOperIndex+1, onScreen.length).replace(/!+/g, '');
        scAfLastOperatorTran = scAfLastOperator.replace(/\s+/g, '');

        
        Fact = function(x) {
            var relevant=1;
            for (var i = 2; i <= x; i++)
            relevant = relevant * i;
            return relevant;
        };
    },
    //used to judge basicFunc, secFunc, powerExp and power10 functions
    simillarFunc : function(addAfterClick,addBackData) {
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
        };
    },
    back : {
        length : function() {
            dataLength = Number(String(onScreen).length);
            backDataLength = Number(String(onBackGround).length);
        },
        
        backSecFunc : function() {
            //Due to there are a space after operator so we neeed to plus 1 after maxScLfuncIndex and maxBgLfuncIndex
            maxScLfuncIndex = Math.max(onScreen.lastIndexOf("+"), onScreen.lastIndexOf("-"), onScreen.lastIndexOf("×"), onScreen.lastIndexOf("÷"), onScreen.substring(0, onScreen.length - 1).lastIndexOf("("));
            remainScFunction = onScreen.substring(0, maxScLfuncIndex+1);
            scFunctionAfOp = onScreen.substring(maxScLfuncIndex + 1, onScreen.length - 1);
            scFunctionAfOp1 = scFunctionAfOp.replace(/\s+/g,"");
            

            maxBgLfuncIndex = Math.max(onBackGround.lastIndexOf("+"), onBackGround.lastIndexOf("-"), onBackGround.lastIndexOf("*"), onBackGround.lastIndexOf("\/"), onBackGround.substring(0, onBackGround.lastIndexOf("(") - 1).lastIndexOf("("));
            remainBgFunction = onBackGround.substring(0, maxBgLfuncIndex+1);
        },
        
        backPower : function() {
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
            };

            maxBgLfuncIndex2 = Math.max(onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("+"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("-"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("*"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).lastIndexOf("\/"), onBackGround.substring(0,bgJudgeBetLeftAndRight2()).substring(0, onBackGround.lastIndexOf("(") - 1).lastIndexOf("("));
            remainBgFunction2 = onBackGround.substring(0, maxBgLfuncIndex2+1);

            bgBetLeftAndRight2 = onBackGround.substring(bgJudgeBetLeftAndRight2(),onBackGround.length - 1);
        },
        
        backFactorial : function() {
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
        }
    }, 
    afterClickButtom : function() {
        document.getElementById("equqtion").innerHTML = frontData;
        document.getElementById("equqtion2").innerHTML = frontData.substring(frontData.length-46,frontData.length);
        document.getElementById("background").innerHTML = backGroundData;

        console.log("onScreen : " + document.getElementById("equqtion").innerHTML);
        console.log("onBackGround : " + document.getElementById("background").innerHTML);
    },
    scMessage : function(showedMessage,color,fontSize) {
        document.getElementById("messages").innerHTML = showedMessage;
        document.getElementById("messages").style.color = color;
        document.getElementById("messages").style.fontSize = fontSize;
    }
}

function clearAll() {
    document.getElementById("equqtion").innerHTML = "";
    document.getElementById("equqtion2").innerHTML = "";
    document.getElementById("background").innerHTML = "";

    console.log("onScreen : " + document.getElementById("equqtion").innerHTML);
    console.log("onBackGround : " + document.getElementById("background").innerHTML);
    category.scMessage('Have a Good Day!', "black", "2em");
}

function basicFunc(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.simillarFunc(addAfterClick,addBackData);   
    category.afterClickButtom();
    category.scMessage('Have a Good Day!', "black", "2em");
}

function secFunc(e) {
    var addAfterClick = e.value + " (";
    var addBackData = e.name;
    category.basicVariable();
    category.simillarFunc(addAfterClick,addBackData);
    category.afterClickButtom();
    category.scMessage('Have a Good Day!', "black", "2em");
}

function powerExp(e) {
    var addAfterClick = e.value.substring(0,4) + " (";
    var addBackData = e.name;
    category.basicVariable();
    category.simillarFunc(addAfterClick,addBackData);
    category.afterClickButtom();
    category.scMessage('Have a Good Day!', "black", "2em");
}

function power10(e) {
    var addAfterClick = e.value.substring(0,6) + " (";
    var addBackData = e.name;
    category.basicVariable();
    category.simillarFunc(addAfterClick,addBackData);
    category.afterClickButtom();
    category.scMessage('Have a Good Day!', "black", "2em");
}

function percentage(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(onScreen.length === 0) {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please add "%" after </br> number, π or Ans', "red", "1.2em");
    } else if(isNaN(judgeLastString) && judgeLastString != "." && judgeLastString != "s" && judgeLastString != "π") {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please add "%" after </br> number, π or Ans', "red", "1.2em");
    } else if(judgeLastString === ".") {
        frontData = onScreen+ " 0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    };
    
    category.afterClickButtom();
    
}

function digit(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(judgeLastString === "π" || judgeLastString === ")" || judgeLastString === "!" || judgeLastString === "s") {
        frontData = onScreen + " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;  
    };
    
    category.afterClickButtom();
}

function operator(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if (onScreen.length === 0 || judgeLastString === ".") {
        frontData = onScreen+ "0" + addAfterClick;
        backGroundData = onBackGround + "0" + addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Can not add operator after </br> operator or left parenthese! ', "red", "1.2em");
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    };
    category.afterClickButtom();
}

function subtract(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if (judgeLastString === ".") {
        frontData = onScreen+ "0" + addAfterClick;
        backGroundData = onBackGround + "0" + addBackData;
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷") {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Can not add operator after </br> operator or left parenthese! ', "red", "1.2em");
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    };
    category.afterClickButtom();
    
}

function point(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.point();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if (onScreen.lastIndexOf(".") === -1 && onScreen.length != 0 && isNaN(judgeLastString) === false) {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else if(scLastOperatorPos > lastPointPos && isNaN(judgeLastString) === false){
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    } else {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please add point after number! ', "red", "1.2em");
    };
    
    category.afterClickButtom();
}

function rightPare(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.parentheses();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷" || judgeLastString === "(") {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Can not add ")" after operator or "("! ', "red", "1.2em");
    } else if(onScreen.length === 0 || countLeftPare <= countRightPare) {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Can not add ")" when the number of ")" is equal to "(" \'s !', "red", "1.2em");
    } else if (judgeLastString === "." ) {
        frontData = onScreen+ " 0" + addAfterClick;
        backGroundData = onBackGround + "0" + addBackData;
        
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    };
    
    category.afterClickButtom();
}

function leftPare(e) {
    var addAfterClick = e.value;
    var addBackData = e.name;
    category.basicVariable();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if( onScreen.length === 0 ) {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
        
    } else if (isNaN(judgeLastString) === false || judgeLastString === ")" || judgeLastString === "!" || judgeLastString === "s") {
        frontData = onScreen+ " ×" + addAfterClick;
        backGroundData = onBackGround + "*" + addBackData;
        
    } else if (judgeLastString === ".") {
        frontData = onScreen+ "0 ×" + addAfterClick;
        backGroundData = onBackGround + "0*" + addBackData;
        
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = onBackGround + addBackData;
    };
    category.afterClickButtom();
}

function power(e) {
    var addAfterClick = e.value.substring(2,4) + " (";
    var addBackData = e.name;
    category.basicVariable();
    category.powerAndFactorial();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(onScreen.length === 0) {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please set parameter "x"!', "red", "1.2em");
    } else if(isNaN(judgeLastString) && judgeLastString != "π" && judgeLastString != "s" && judgeLastString != "." && judgeLastString != ")") {
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Parameter "x" can only be number, π or Ans!', "red", "1.2em");
    } else if(isNaN(judgeLastString) === false || judgeLastString === "π" || judgeLastString === "s") {
        frontData = onScreen + addAfterClick;
        backGroundData = bgBfLastOperator + addBackData + bgAfLastOperator + ",";
    } else if(judgeLastString === ".") {
        frontData = onScreen + " 0" + addAfterClick;
        backGroundData = bgBfLastOperator + addBackData + bgAfLastOperator + "0,";
    } else {
        frontData = onScreen + addAfterClick;
        backGroundData = bgBefLeftparen + addBackData + bgBetparen + ",";
    };
    category.afterClickButtom();
}

function factorial(e) {
    var addAfterClick = e.value;
    category.basicVariable();
    category.onlyFactorial();
    category.powerAndFactorial();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(isNaN(judgeLastString) && judgeLastString != ")" && judgeLastString != "s") {
        // not number
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please add factorial after integer numbers!', "red", "1.2em");
    } else if(scAfLastOperatorTran != parseInt(scAfLastOperatorTran,10) && judgeLastString != ")" && judgeLastString != "s") {
        // not integer
        frontData = onScreen;
        backGroundData = onBackGround;
        category.scMessage('Please add factorial after integer numbers!', "red", "1.2em");
    } else if(judgeLastString === ")") {
        if(eval(bgBetparen) != parseInt(eval(bgBetparen),10)) {
            frontData = onScreen;
            backGroundData = onBackGround;
            category.scMessage('Please add factorial after integer numbers!', "red", "1.2em");
        } else {
            frontData = onScreen + addAfterClick.substring(2,4);
            backGroundData = bgBefLeftparen + "(" +  Fact(eval(bgBetparen)) +")";
        }
    } else if(judgeLastString === "s") {
        category.specialMath();
        if(Ans != parseInt(Ans,10)) {
            frontData = onScreen;
            backGroundData = onBackGround;
            category.scMessage('Please add factorial after integer numbers!', "red", "1.2em");
        } else {
            frontData = onScreen + addAfterClick.substring(2,4);
            backGroundData = bgBfLastOperator + "(" + Fact(Ans) +")";
        }
        
    } else {
        frontData = onScreen + addAfterClick.substring(2,4);
        backGroundData = bgBfLastOperator + "(" + Fact(scAfLastOperatorTran) +")";
    };
    category.afterClickButtom();
}

function back() {
    category.basicVariable();
    category.back.length();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if (judgeLastAns === 3 && searchAns != -1) {
        frontData = onScreen.substring(0,dataLength - 4);
        backGroundData = onBackGround.substring(0,backDataLength - 3);
        
    } else if( judgeLastString === "(") {
        if(onScreen.substring(onScreen.length - 3, onScreen.length - 2) === "^") {
            if(onScreen.substring(onScreen.length - 5, onScreen.length - 4) === ")") {
                category.back.backPower();
                frontData = onScreen.substring(0,dataLength - 4);
                backGroundData = remainBgFunction2 + bgBetLeftAndRight2;
                
            } else if(onScreen.substring(onScreen.length - 5, onScreen.length - 4) === "e") {
                category.back.backSecFunc();
                frontData = onScreen.substring(0,dataLength - 6);
                backGroundData = remainBgFunction;
                
            } else {
                category.back.backSecFunc();
                frontData = onScreen.substring(0,dataLength - 4);
                backGroundData = remainBgFunction + onBackGround.substring(onBackGround.lastIndexOf("(")+1,onBackGround.length - 1);
                
            }
            
        } else {
            category.back.backSecFunc();
            frontData = remainScFunction;
            backGroundData = remainBgFunction;
        }
        
    } else if( judgeLastString === "!") {
        category.powerAndFactorial();
        if(onScreen.substring(onScreen.length - 3, onScreen.length - 2) === ")") {
            category.back.backFactorial();
            frontData = onScreen.substring(0,dataLength - 2);
            backGroundData = bgBefLeftparen + scBetLeftAndRightTran3;
            
        } else {
            category.back.backSecFunc();
            frontData = onScreen.substring(0,dataLength - 2);
            backGroundData = bgBefLeftparen + scFunctionAfOp1;
        }

    } else if(judgeLastString === "%") {
        frontData = onScreen.substring(0,dataLength - 2);
        backGroundData = onBackGround.substring(0,backDataLength - 5);
        
    } else {
        frontData = onScreen.substring(0,dataLength - 2);
        backGroundData = onBackGround.substring(0,backDataLength - 1);
    };
    category.afterClickButtom();
}

function equal(e) {
    category.basicVariable();
    category.specialMath();
    category.parentheses();
    category.scMessage('Have a Good Day!', "black", "2em");
    
    if(onScreen.length === 0) {
        evalResult = "0";
        category.scMessage('Please creat formulas!', "red", "1.2em");
    } else if(countLeftPare > countRightPare) {
        evalResult = Ans;
        category.scMessage('The number of ")" is small then "(" \'s Please add ")"!', "red", "1.2em");
    } else if(isNaN(eval(onBackGround))) {
        evalResult = Ans;
        category.scMessage('Formula error! Please check again! </br> This may cause by ln(a) and log(a) when a<0. </br> Or asin(b) and acos(b) when b>1.', "red", "0.8em");
        
    } else if(judgeLastString === "+" || judgeLastString === "-" || judgeLastString === "×" || judgeLastString === "÷") {
        back();
        category.basicVariable();
        evalResult = eval(onBackGround);
        clearAll();
    } else {
        evalResult = eval(onBackGround);
        clearAll();
    }
    document.getElementById("result").innerHTML = evalResult;
    
    console.log(evalResult);
    
}
