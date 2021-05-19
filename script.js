// for phoneincrease: 

let plusPhone = document.getElementById("plusPhone");
plusPhone.addEventListener("click", function(){
    let currentPhone = document.getElementById("currentPhone").value ;
    let currentPhoneNumber = parseFloat(currentPhone); 
    let addNew = currentPhoneNumber +1 ;
    document.getElementById("currentPhone").value = addNew;

    let phonePrice = document.getElementById("phonePrice").innerText;
    let phonePriceNumber = parseFloat(phonePrice);
    let phonePriceIncrease =  phonePriceNumber + 1219;
    document.getElementById("phonePrice").innerText = phonePriceIncrease;

    totalCount();

    // subtotal area

    // let subtotal = document.getElementById("subtotalCost").innerText;
    // let subtotalNumber = parseFloat(subtotal);
    // let subtotalIncrease = subtotalNumber + 1219;
    // document.getElementById("subtotalCost").innerText = subtotalIncrease;

  
})

// for phonedecrease

let minusPhone = document.getElementById("minusPhone");
minusPhone.addEventListener("click", function(){
    let currentPhone = document.getElementById("currentPhone").value ;
    let currentPhoneNumber = parseFloat(currentPhone); 
    let removePhone = currentPhoneNumber -1 ;
    document.getElementById("currentPhone").value = Math.abs(removePhone);

    let phonePrice = document.getElementById("phonePrice").innerText;
    let phonePriceNumber = parseFloat(phonePrice);
    let phonePriceDecrease =  Math.abs(phonePriceNumber - 1219);
    document.getElementById("phonePrice").innerText = phonePriceDecrease;

    totalCount();

    // // for sub total decrease
    // let subtotal = document.getElementById("subtotalCost").innerText;
    // let subtotalNumber = parseFloat(subtotal);
    // let subtotalDecrease = subtotalNumber - 1219;
    // document.getElementById("subtotalCost").innerText = Math.abs(subtotalDecrease);
})

// For caseincrease:


let plusCase = document.getElementById("plusCase");
plusCase.addEventListener("click", function(){
    let currentCase = document.getElementById("currentCase").value;
    let currentCaseNumber = parseFloat(currentCase);
    let addCase = currentCaseNumber + 1;
    document.getElementById("currentCase").value = addCase;

    let casePrice = document.getElementById("casePrice").innerText;
    let casePriceNumber = parseFloat(casePrice);
    let casePriceIncrease = casePriceNumber + 59;
    document.getElementById("casePrice").innerText = casePriceIncrease;

    totalCount();

    // // for subtotal: 
    // let subtotal = document.getElementById("subtotalCost").innerText;
    // let subtotalNumber = parseFloat(subtotal);
    // let subtotalCostCaseIncrease = subtotalNumber + 59;
    // document.getElementById("subtotalCost").innerText = subtotalCostCaseIncrease;
})

// for casedecrease: 


let minusCase = document.getElementById("minusCase");
minusCase.addEventListener("click", function(){
    let currentCase = document.getElementById("currentCase").value;
    let currentCaseNumber = parseFloat(currentCase);
   let removeCase = currentCaseNumber -1;
    document.getElementById("currentCase").value = Math.abs(removeCase);

    let casePrice = document.getElementById("casePrice").innerText;
    let casePriceNumber = parseFloat(casePrice);
    let casePriceDecrease = casePriceNumber - 59;
    document.getElementById("casePrice").innerText = Math.abs(casePriceDecrease);

    totalCount();

    // // for subtotal;
    // let subtotal = document.getElementById("subtotalCost").innerText;
    // let subtotalNumber = parseFloat(subtotal);
    // let subtotalCostCaseDecrease = subtotalNumber - 59;
    // document.getElementById("subtotalCost").innerText = Math.abs(subtotalCostCaseDecrease);
});


function totalCount(){
    let phonePrice = document.getElementById("phonePrice").innerText;
    let phonePriceNumber = parseInt(phonePrice);

    let casePrice = document.getElementById("casePrice").innerText;
    let casePriceNumber = parseInt(casePrice);

    
    let subtotal = phonePriceNumber + casePriceNumber;
    document.getElementById("subtotalCost").innerText = subtotal;

    let taxCount = Math.round(subtotal * 0.1);
    document.getElementById("taxCost").innerText = taxCount;

    let totalAmount = taxCount + subtotal;
    document.getElementById("totalCost").innerText = totalAmount;
}


