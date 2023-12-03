let buttonPressed='false';

//shortcut to formatting the input text boxes, sets attribute and style properties
function formatTextBox(boxVar, boxID,){
    boxVar.setAttribute('type','text');
    boxVar.setAttribute('id',boxID);
    boxVar.style.height= '18px';
    boxVar.style.alignSelf= 'center';
}

//shortcut to formatting the divs, sets style properties
function formatDiv(divName){
    divName.style.display='flex';
    divName.style.flexDirection='row';
    divName.style.marginBottom='-25px';
    divName.style.justifyContent='right';
}

//performs the calculation for the assets section by summing the values up and returning the float
function calcAssets() {
    const cashVal=document.getElementById("cash-box");
    const invVal=document.getElementById("inv-box");
    const supVal=document.getElementById("sup-box");
    const tempVal=document.getElementById("temp-box");
    let quantity=0.0;

    quantity=parseFloat(cashVal.value)+parseFloat(invVal.value)+parseFloat(supVal.value)+parseFloat(tempVal.value);
    return quantity;
}

//performs the calculation for the investment property and equipment section by summing the values up and returning the float
function calcInvest() {
    const landVal=document.getElementById("land-box");
    const buildVal=document.getElementById("build-box");
    const equipVal=document.getElementById("equip-box");
    const tempVal=document.getElementById("invest-temp-box");
    let quantity=0.0;

    quantity=parseFloat(landVal.value)+parseFloat(buildVal.value)+parseFloat(equipVal.value)+parseFloat(tempVal.value);
    return quantity;
}

//performs the calculation for the intangibles section by summing the values up and returning the float
function calcIntangibles() {
    const tradeVal=document.getElementById("trade-box");
    const goodVal=document.getElementById("good-box");
    let quantity=0.0;

    quantity=parseFloat(tradeVal.value)+parseFloat(goodVal.value);
    return quantity;
}

//performs the calculation for the liabilities section by summing the values up and returning the float
function calcLiabilities () {
    const accountsVal=document.getElementById("accounts-box");
    const notesVal=document.getElementById("notes-box");
    const interestVal=document.getElementById("interest-box");
    const wagesVal=document.getElementById("wages-box");
    const accruedVal=document.getElementById("accrued-box");
    let quantity=0.0;

    quantity=parseFloat(accountsVal.value)+parseFloat(notesVal.value)+parseFloat(interestVal.value)+parseFloat(wagesVal.value)+parseFloat(accruedVal.value);
    return quantity;
}

//performs the calculation for the long-term liabilities section by summing the values up and returning the float
function calcLongTerm() {
    const notesVal=document.getElementById("long-term-notes-box");
    const bondsVal=document.getElementById("bonds-box");
    let quantity=0.0;

    quantity=parseFloat(notesVal.value)+parseFloat(bondsVal.value);
    return quantity;
}

//takes the calculations and appends them into their respective text areas and performs the total calculations
function calcPosition() {
    //does this for every section and converts to USD
    let val=document.getElementById("assets-text");
    let assets=calcAssets();
    let text=document.createTextNode(assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    val.appendChild(text);

    val=document.getElementById("invest-text");
    assets=calcInvest();
    text=document.createTextNode(assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    val.appendChild(text);

    val=document.getElementById("intangibles-text");
    assets=calcIntangibles();
    text=document.createTextNode(assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    val.appendChild(text);

    val=document.getElementById("liabilities-text");
    assets=calcLiabilities();
    text=document.createTextNode(assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    val.appendChild(text);

    val=document.getElementById("long-term-text");
    assets=calcLongTerm();
    text=document.createTextNode(assets.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    val.appendChild(text);

    //adds up totals for each half and then the subtraction for the position value
    let final=document.getElementById("total-assets");
    let sum=(calcAssets())+(calcInvest())+(calcIntangibles());
    text=document.createTextNode(sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    final.appendChild(text);

    final=document.getElementById("total-liabilities");
    sum=(calcLiabilities())+(calcLongTerm());
    text=document.createTextNode(sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    final.appendChild(text);

    final=document.getElementById("position");
    sum=((calcAssets())+(calcInvest())+(calcIntangibles()))-((calcLiabilities())+(calcLongTerm()));
    text=document.createTextNode(sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    final.appendChild(text);
}

//adds the text and textboxes for the current assets section as well as some other misc functions
function addAssets(){

    //get data for grid item
    let grid=document.getElementById("grid-item-3");

    //hide button
    let button=document.getElementById("add-current-assets");
    button.style.display= 'none';

    //create new divs
    let box = document.createElement("div");
    box.classList.add("info");

    let cashDiv=document.createElement("div");
    formatDiv(cashDiv);
    let invDiv=document.createElement("div");
    formatDiv(invDiv);
    let supDiv=document.createElement("div");
    formatDiv(supDiv);
    let tempDiv=document.createElement("div");
    formatDiv(tempDiv);

    let calcDiv=document.createElement("div");
    calcDiv.style.display='flex';
    calcDiv.style.justifyContent='right';
    calcDiv.setAttribute('id','calc-div');

    //add text to p elements
    let cash=document.createElement("p");
    let text= document.createTextNode("Cash:");
    cash.appendChild(text);
    cashDiv.appendChild(cash);

    let inventory=document.createElement("p");
    text= document.createTextNode("Inventory:");
    inventory.appendChild(text);
    invDiv.appendChild(inventory);

    let supplies=document.createElement("p");
    text= document.createTextNode("Supplies:");
    supplies.appendChild(text);
    supDiv.appendChild(supplies);

    let tempInvest=document.createElement("p");
    text= document.createTextNode("Temporary Investments:");
    tempInvest.appendChild(text);
    tempDiv.appendChild(tempInvest);

    let calc=document.createElement("p");
    calc.setAttribute('id','assets-text');
    calc.style.borderTop='1px black solid';
    calc.style.borderBottom='1px black solid';
    text= document.createTextNode("Total Current Assets: ");
    calc.appendChild(text)
    calcDiv.appendChild(calc);

    //create text boxes
    let cashBox=document.createElement("input");
    formatTextBox(cashBox, 'cash-box');
    cashDiv.appendChild(cashBox);

    let invBox=document.createElement("input");
    formatTextBox(invBox, 'inv-box');
    invDiv.appendChild(invBox);

    let supBox=document.createElement("input");
    formatTextBox(supBox, 'sup-box');
    supDiv.appendChild(supBox);

    let tempBox=document.createElement("input");
    formatTextBox(tempBox, 'temp-box');
    tempDiv.appendChild(tempBox);

    //append divs to the grid-item
    box.appendChild(cashDiv);
    box.appendChild(invDiv);
    box.appendChild(supDiv);
    box.appendChild(tempDiv);
    box.appendChild(calcDiv);
    grid.appendChild(box);

    //if this is the first time a section button has been pressed, this block will add the button to calculate position
    if (buttonPressed=='false') {
        buttonPressed='true';
        const final=document.getElementById("finalButton");
        let finalBut=document.createElement("button");
        finalBut.setAttribute('id','final-button');
        finalBut.setAttribute('onclick', 'calcPosition()')
        finalBut.textContent='Calculate Position';
        final.appendChild(finalBut);
    }

}

//adds the text and textboxes for the investment property and equipment section as well as some other misc functions
function addInvestment() {
    //get data for grid item
    let grid=document.getElementById("grid-item-5");

    //hide button
    let button=document.getElementById("add-investment");
    button.style.display= 'none';

    //create new divs
    let box = document.createElement("div");
    box.classList.add("info");

    let landDiv=document.createElement("div");
    formatDiv(landDiv);
    let buildDiv=document.createElement("div");
    formatDiv(buildDiv);
    let equipDiv=document.createElement("div");
    formatDiv(equipDiv);
    let tempDiv=document.createElement("div");
    formatDiv(tempDiv);

    let calcDiv=document.createElement("div");
    calcDiv.style.display='flex';
    calcDiv.style.justifyContent='right';
    calcDiv.setAttribute('id','calc-invest-div');

    //add text to p elements
    let land=document.createElement("p");
    let text= document.createTextNode("Land:");
    land.appendChild(text);
    landDiv.appendChild(land);

    let build=document.createElement("p");
    text= document.createTextNode("Building and Improvements:");
    build.appendChild(text);
    buildDiv.appendChild(build);

    let equip=document.createElement("p");
    text= document.createTextNode("Equipment:");
    equip.appendChild(text);
    equipDiv.appendChild(equip);

    let tempInvest=document.createElement("p");
    text= document.createTextNode("Temporary Investments:");
    tempInvest.appendChild(text);
    tempDiv.appendChild(tempInvest);

    let calc=document.createElement("p");
    calc.setAttribute('id','invest-text');
    calc.style.borderTop='1px black solid';
    calc.style.borderBottom='1px black solid';
    text= document.createTextNode("Total Investment Property and Equipment: ");
    calc.appendChild(text)
    calcDiv.appendChild(calc);

    //create text boxes
    let landBox=document.createElement("input");
    formatTextBox(landBox, 'land-box');
    landDiv.appendChild(landBox);

    let buildBox=document.createElement("input");
    formatTextBox(buildBox, 'build-box');
    buildDiv.appendChild(buildBox);

    let equipBox=document.createElement("input");
    formatTextBox(equipBox, 'equip-box');
    equipDiv.appendChild(equipBox);

    let tempBox=document.createElement("input");
    formatTextBox(tempBox, 'invest-temp-box');
    tempDiv.appendChild(tempBox);

    //append divs to the grid-item
    box.appendChild(landDiv);
    box.appendChild(buildDiv);
    box.appendChild(equipDiv);
    box.appendChild(tempDiv);
    box.appendChild(calcDiv);
    grid.appendChild(box);

    //if this is the first time a section button has been pressed, this block will add the button to calculate position
    if (buttonPressed=='false') {
        buttonPressed='true';
        const final=document.getElementById("finalButton");
        let finalBut=document.createElement("button");
        finalBut.setAttribute('id','final-button');
        finalBut.setAttribute('onclick', 'calcPosition()')
        finalBut.textContent='Calculate Position';
        final.appendChild(finalBut);
    }
}

//adds the text and textboxes for the intangibles section as well as some other misc functions
function addIntangibles() {
    //get data for grid item
    let grid=document.getElementById("grid-item-7");

    //hide button
    let button=document.getElementById("add-intangibles");
    button.style.display= 'none';

    //create new divs
    let box = document.createElement("div");
    box.classList.add("info");

    let tradeDiv=document.createElement("div");
    formatDiv(tradeDiv);
    let goodDiv=document.createElement("div");
    formatDiv(goodDiv);

    let calcDiv=document.createElement("div");
    calcDiv.style.display='flex';
    calcDiv.style.justifyContent='right';
    calcDiv.setAttribute('id','calc-intangibles-div');

    //add text to p elements
    let trade=document.createElement("p");
    let text= document.createTextNode("Trade Names:");
    trade.appendChild(text);
    tradeDiv.appendChild(trade);

    let good=document.createElement("p");
    text= document.createTextNode("Goodwill:");
    good.appendChild(text);
    goodDiv.appendChild(good);

    let calc=document.createElement("p");
    calc.setAttribute('id','intangibles-text');
    calc.style.borderTop='1px black solid';
    calc.style.borderBottom='1px black solid';
    text= document.createTextNode("Total Intangibles: ");
    calc.appendChild(text)
    calcDiv.appendChild(calc);

    //create text boxes
    let tradeBox=document.createElement("input");
    formatTextBox(tradeBox, 'trade-box');
    tradeDiv.appendChild(tradeBox);

    let goodBox=document.createElement("input");
    formatTextBox(goodBox, 'good-box');
    goodDiv.appendChild(goodBox);

    //append divs to the grid-item
    box.appendChild(tradeDiv);
    box.appendChild(goodDiv);
    box.appendChild(calcDiv);
    grid.appendChild(box);

    //if this is the first time a section button has been pressed, this block will add the button to calculate position
    if (buttonPressed=='false') {
        buttonPressed='true';
        const final=document.getElementById("finalButton");
        let finalBut=document.createElement("button");
        finalBut.setAttribute('id','final-button');
        finalBut.setAttribute('onclick', 'calcPosition()')
        finalBut.textContent='Calculate Position';
        final.appendChild(finalBut);
    }
}

//adds the text and textboxes for the current liabilities section as well as some other misc functions
function addLiabilities() {
    //get data for grid item
    let grid=document.getElementById("grid-item-4");

    //hide button
    let button=document.getElementById("add-current-liabilities");
    button.style.display= 'none';

    //create new divs
    let box = document.createElement("div");
    box.classList.add("info");

    let accountsDiv=document.createElement("div");
    formatDiv(accountsDiv);
    let notesDiv=document.createElement("div");
    formatDiv(notesDiv);
    let interestDiv=document.createElement("div");
    formatDiv(interestDiv);
    let wagesDiv=document.createElement("div");
    formatDiv(wagesDiv);
    let accruedDiv=document.createElement("div");
    formatDiv(accruedDiv);

    let calcDiv=document.createElement("div");
    calcDiv.style.display='flex';
    calcDiv.style.justifyContent='right';
    calcDiv.setAttribute('id','calc-liabilities-div');

    //add text to p elements
    let accounts=document.createElement("p");
    let text= document.createTextNode("Accounts Payable:");
    accounts.appendChild(text);
    accountsDiv.appendChild(accounts);

    let notes=document.createElement("p");
    text= document.createTextNode("Notes Payable:");
    notes.appendChild(text);
    notesDiv.appendChild(notes);

    let interest=document.createElement("p");
    text= document.createTextNode("Interest Payable:");
    interest.appendChild(text);
    interestDiv.appendChild(interest);

    let wages=document.createElement("p");
    text= document.createTextNode("Wages Payable:");
    wages.appendChild(text);
    wagesDiv.appendChild(wages);

    let accrued=document.createElement("p");
    text= document.createTextNode("Accrued Expenses:");
    accrued.appendChild(text);
    accruedDiv.appendChild(accrued);

    let calc=document.createElement("p");
    calc.setAttribute('id','liabilities-text');
    calc.style.borderTop='1px black solid';
    calc.style.borderBottom='1px black solid';
    text= document.createTextNode("Total Current Liabilities: ");
    calc.appendChild(text)
    calcDiv.appendChild(calc);

    //create text boxes
    let accountsBox=document.createElement("input");
    formatTextBox(accountsBox, 'accounts-box');
    accountsDiv.appendChild(accountsBox);

    let notesBox=document.createElement("input");
    formatTextBox(notesBox, 'notes-box');
    notesDiv.appendChild(notesBox);

    let interestBox=document.createElement("input");
    formatTextBox(interestBox, 'interest-box');
    interestDiv.appendChild(interestBox);

    let wagesBox=document.createElement("input");
    formatTextBox(wagesBox, 'wages-box');
    wagesDiv.appendChild(wagesBox);

    let accruedBox=document.createElement("input");
    formatTextBox(accruedBox, 'accrued-box');
    accruedDiv.appendChild(accruedBox);

    //append divs to the grid-item
    box.appendChild(accountsDiv);
    box.appendChild(notesDiv);
    box.appendChild(interestDiv);
    box.appendChild(wagesDiv);
    box.appendChild(accruedDiv);
    box.appendChild(calcDiv);
    grid.appendChild(box);

    //if this is the first time a section button has been pressed, this block will add the button to calculate position
    if (buttonPressed=='false') {
        buttonPressed='true';
        const final=document.getElementById("finalButton");
        let finalBut=document.createElement("button");
        finalBut.setAttribute('id','final-button');
        finalBut.setAttribute('onclick', 'calcPosition()')
        finalBut.textContent='Calculate Position';
        final.appendChild(finalBut);
    }
}

//adds the text and textboxes for the long-term liabilities section as well as some other misc functions
function addLongTerm() {
 //get data for grid item
 let grid=document.getElementById("grid-item-6");

 //hide button
 let button=document.getElementById("add-long-term-liabilities");
 button.style.display= 'none';

 //create new divs
 let box = document.createElement("div");
 box.classList.add("info");

 let notesDiv=document.createElement("div");
 formatDiv(notesDiv);
 let bondsDiv=document.createElement("div");
 formatDiv(bondsDiv);

 let calcDiv=document.createElement("div");
 calcDiv.style.display='flex';
 calcDiv.style.justifyContent='right';
 calcDiv.setAttribute('id','calc-long-term-div');

 //add text to p elements
 let notes=document.createElement("p");
 let text= document.createTextNode("Notes Payable:");
 notes.appendChild(text);
 notesDiv.appendChild(notes);

 let bonds=document.createElement("p");
 text= document.createTextNode("Bonds Payable:");
 bonds.appendChild(text);
 bondsDiv.appendChild(bonds);

 let calc=document.createElement("p");
 calc.setAttribute('id','long-term-text');
 calc.style.borderTop='1px black solid';
 calc.style.borderBottom='1px black solid';
 text= document.createTextNode("Total Long-term Liabilities: ");
 calc.appendChild(text)
 calcDiv.appendChild(calc);

 //create text boxes
 let notesBox=document.createElement("input");
 formatTextBox(notesBox, 'long-term-notes-box');
 notesDiv.appendChild(notesBox);

 let bondsBox=document.createElement("input");
 formatTextBox(bondsBox, 'bonds-box');
 bondsDiv.appendChild(bondsBox);

 //append divs to the grid-item
 box.appendChild(notesDiv);
 box.appendChild(bondsDiv);
 box.appendChild(calcDiv);
 grid.appendChild(box);

 //if this is the first time a section button has been pressed, this block will add the button to calculate position
 if (buttonPressed=='false') {
     buttonPressed='true';
     const final=document.getElementById("finalButton");
     let finalBut=document.createElement("button");
     finalBut.setAttribute('id','final-button');
     finalBut.setAttribute('onclick', 'calcPosition()')
     finalBut.textContent='Calculate Position';
     final.appendChild(finalBut);
 }
}