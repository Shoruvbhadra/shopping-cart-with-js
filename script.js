// for phoneincrease: 

let plusPhone = document.getElementById("plusPhone");
plusPhone.addEventListener("click", function(){
    let currentPhone = document.getElementById("currentPhone").value ;
    let currentPhoneNumber = parseFloat(currentPhone); 
    let addNew = currentPhoneNumber +1 ;
    document.getElementById("currentPhone").value = addNew;

    // let phonePrice = document.getElementById("phonePrice").innerText;
    // let phonePriceNumber = parseFloat(phonePrice);
    // let phonePriceIncrease =  phonePriceNumber;
    // document.getElementById("phonePrice").innerText = phonePriceIncrease;
})

// for phonedecrease

let minusPhone = document.getElementById("minusPhone");
minusPhone.addEventListener("click", function(){
    let currentPhone = document.getElementById("currentPhone").value ;
    let currentPhoneNumber = parseFloat(currentPhone); 
    let removePhone = currentPhoneNumber -1 ;
    document.getElementById("currentPhone").value = Math.abs(removePhone);
})

// For caseincrease:


let plusCase = document.getElementById("plusCase");
plusCase.addEventListener("click", function(){
    let currentCase = document.getElementById("currentCase").value;
    let currentCaseNumber = parseFloat(currentCase);
    let addCase = currentCaseNumber + 1;
    document.getElementById("currentCase").value = addCase;
})

// for casedecrease: 


let minusCase = document.getElementById("minusCase");
minusCase.addEventListener("click", function(){
    let currentCase = document.getElementById("currentCase").value;
    let currentCaseNumber = parseFloat(currentCase);
   let removeCase = currentCaseNumber -1;
    document.getElementById("currentCase").value = Math.abs(removeCase);
});