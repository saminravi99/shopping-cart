document.getElementById('phone-plus').addEventListener('click', function() {
    let phoneInput = document.getElementById('phone-input').value;
    phoneInput++;
    document.getElementById('phone-input').value = phoneInput;
    if(phoneInput >= 5 ){
        document.getElementById('phone-plus').disabled = true;
    }
    
    let phonePricePlus = document.getElementById('phone-price').innerText;
    phonePricePlus = phoneInput * 100;
    document.getElementById('phone-price').innerText = phonePricePlus;

    
    

    let subTotal = document.getElementById('subtotal').innerText;
    subTotal = phonePricePlus;
    document.getElementById('subtotal').innerText = parseFloat(subTotal) + parseFloat(document.getElementById('case-price').innerText);

    

    
    let taxPhonePlus = subTotal * 0.1; // 10% tax
    let taxCasePlus = document.getElementById('case-price').innerText * 0.1;
    document.getElementById('tax').innerText = parseFloat(taxPhonePlus) + parseFloat(taxCasePlus); ;

    


    let total =parseFloat(document.getElementById('tax').innerText) + parseFloat(document.getElementById('subtotal').innerText);
    document.getElementById('total').innerText = total;

});

document.getElementById('phone-minus').addEventListener('click', function() {
    let phoneInput = document.getElementById('phone-input').value;

    if(phoneInput < 6 ){
        document.getElementById('phone-plus').disabled = false;
    }
    if (phoneInput > 0) {
        phoneInput--;
        document.getElementById('phone-input').value = phoneInput;
    }

    let phonePriceMinus = document.getElementById('phone-price').innerText;
    phonePriceMinus = phoneInput * 100;
    document.getElementById('phone-price').innerText = phonePriceMinus;


    


    let subTotal = document.getElementById('subtotal').innerText;
    subTotal = phonePriceMinus;
    document.getElementById('subtotal').innerText = parseFloat(subTotal) + parseFloat(document.getElementById('case-price').innerText);


 



    let taxPhonePlus = subTotal * 0.1; // 10% tax
    let taxCasePlus = document.getElementById('case-price').innerText * 0.1;
    document.getElementById('tax').innerText = parseFloat(taxPhonePlus) + parseFloat(taxCasePlus); ;

   


    let total =parseFloat(document.getElementById('tax').innerText) + parseFloat(document.getElementById('subtotal').innerText);
    document.getElementById('total').innerText = total;
});


document.getElementById('case-plus').addEventListener('click', function() {
    let caseInput = document.getElementById('case-input').value;
    caseInput++;
    document.getElementById('case-input').value = caseInput;
    if(caseInput >= 5 ){
        document.getElementById('case-plus').disabled = true;
    }
    
    let casePricePlus = document.getElementById('case-price').innerText;
    casePricePlus = caseInput * 100;
    document.getElementById('case-price').innerText = casePricePlus;

    




    let subTotal = document.getElementById('subtotal').innerText;
    subTotal = casePricePlus;
    document.getElementById('subtotal').innerText = parseFloat(subTotal) + parseFloat(document.getElementById('phone-price').innerText);
    

   




    let taxCasePlus = subTotal * 0.1; // 10% tax
    let taxPhonePlus = document.getElementById('phone-price').innerText * 0.1;
    document.getElementById('tax').innerText = parseFloat(taxCasePlus) + parseFloat(taxPhonePlus); 

    




    let total =parseFloat(document.getElementById('tax').innerText) + parseFloat(document.getElementById('subtotal').innerText);
    document.getElementById('total').innerText = total;

});


document.getElementById('case-minus').addEventListener('click', function() {
    let caseInput = document.getElementById('case-input').value;

    if(caseInput < 6 ){
        document.getElementById('case-plus').disabled = false;
    }
    if (caseInput > 0) {
        caseInput--;
        document.getElementById('case-input').value = caseInput;
    }

    let casePriceMinus = document.getElementById('case-price').innerText;
    casePriceMinus = caseInput * 100;
    document.getElementById('case-price').innerText = casePriceMinus;






    let subTotal = document.getElementById('subtotal').innerText;
    subTotal = casePriceMinus;
    document.getElementById('subtotal').innerText = parseFloat(subTotal) + parseFloat(document.getElementById('phone-price').innerText);
    

    

    let taxCasePlus = subTotal * 0.1; // 10% tax
    let taxPhonePlus = document.getElementById('phone-price').innerText * 0.1;
    document.getElementById('tax').innerText = parseFloat(taxCasePlus) + parseFloat(taxPhonePlus); 



    
    let total =parseFloat(document.getElementById('tax').innerText) + parseFloat(document.getElementById('subtotal').innerText);
    document.getElementById('total').innerText = total;
});