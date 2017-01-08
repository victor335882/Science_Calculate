function clearAll() {
    var clear = "";
    document.getElementById("equqtion").innerHTML = clear;
}

function back() {
    var data = document.getElementById("equqtion").innerHTML;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
    var dataLength = Number(String(data).length);
    if ( judgeLastAns === 3) {
        var dataBack= data.substring(0,dataLength - 3);
        document.getElementById("equqtion").innerHTML = dataBack;  
    } else {
        var dataBack= data.substring(0,dataLength - 1);
        document.getElementById("equqtion").innerHTML = dataBack;
    }
    
}
    


function digit(e) { 
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
    var searchAns = onScreen.search("Ans");
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    
    var backgroundData;
    var onBackground = document.getElementById("background").innerHTML;
    var addBackgroundData = e.name;
    if( judgeLastAns === 3) {
        if(searchAns === -1) {
            displayDigit = onScreen + addAfterClick;  
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground + addBackgroundData;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);

        } else {
            displayDigit = onScreen + "×" + addAfterClick;;
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground + "*" + addBackgroundData;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);

        } 
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + "*" + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);

    } else{
        displayDigit = onScreen + addAfterClick;  
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);

    }

}

function operator(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
    var searchAns = onScreen.search("Ans");
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    
    var backgroundData;
    var onBackground = document.getElementById("background").innerHTML;
    var addBackgroundData = e.name;
    
    if (onScreen.length === 0) {
        //statement of if must be "===", or browser can't compare 
        // If there is no content on "onScreen"
        displayDigit = "0" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = "0" + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        
    } else if(isNaN(judgeLastString) === false) {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        console.log(isNaN(judgeLastString));
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        
    } else if( judgeLastAns === 3) {
        if(searchAns === -1) {
            displayDigit = onScreen;  
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);

        } else {
            
            displayDigit = onScreen + addAfterClick;
            document.getElementById("equqtion").innerHTML = displayDigit;

            backgroundData = onBackground + addBackgroundData;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);
            
        }
        
    } else {
        // If the last contents of "onScreen" is not Number
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);

    }

}

function pi(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    
    var backgroundData;
    var onBackground = document.getElementById("background").innerHTML;
    var addBackgroundData = e.name;
    
    if(judgeLastString === ".") {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        
    } else if(onScreen.length === 0) {
        displayDigit = addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        
    } else if(judgeLastString === "π") {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + "*" + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
        
    } else {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + "*" + addBackgroundData;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    }

}

function point(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var judgeLastPoint = onScreen.substring(onScreen.lastIndexOf(".") + 1, onScreen.length);
    var addAfterClick = e.value;
    
    var backgroundData;
    var onBackground = document.getElementById("background").innerHTML;
    var addBackgroundData = e.name;
    
    if (onScreen.length === 0) {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    } else if(isNaN(judgeLastString)) {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    } else  {
        if ( onScreen.lastIndexOf(".") === -1) {
            displayDigit = onScreen + addAfterClick;
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground + addBackgroundData;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);
        } else if ( isNaN(judgeLastPoint) === false ) {
            displayDigit = onScreen;
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);
        } else {
            displayDigit = onScreen+ addAfterClick;
            document.getElementById("equqtion").innerHTML = displayDigit;
            
            backgroundData = onBackground + addBackgroundData;
            document.getElementById("background").innerHTML = backgroundData;
            console.log(backgroundData);
        }
    }
}

function answer(e) {
    var displayDigit;
    var onScreen = document.getElementById("equqtion").innerHTML;
    var judgeLastAns = onScreen.length - onScreen.lastIndexOf("Ans");
    var judgeLastString = onScreen.substring(onScreen.length - 1, onScreen.length);
    var addAfterClick = e.value;
    
    var backgroundData;
    var onBackground = document.getElementById("background").innerHTML;
    var addBackgroundAnwser = document.getElementById("result").innerHTML;
    if(judgeLastString === ".") {
        displayDigit = onScreen;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    } else if(onScreen.length === 0) {
        displayDigit = onScreen + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground +addBackgroundAnwser;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    } else {
        displayDigit = onScreen + "×" + addAfterClick;
        document.getElementById("equqtion").innerHTML = displayDigit;
        
        backgroundData = onBackground + "*" + addBackgroundAnwser;
        document.getElementById("background").innerHTML = backgroundData;
        console.log(backgroundData);
    }
}

function equal(e) {
    var calculateResult = document.getElementById("background").innerHTML;
        
    console.log("3+3");
}