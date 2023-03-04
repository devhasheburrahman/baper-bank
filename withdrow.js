document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmoun = parseFloat(newWithdrowAmountString);

    const withdrowTotalElament = document.getElementById('withdrow-total');
    const previcewithdrowTotalString = withdrowTotalElament.innerText;
    const previceWithdrowTotal = parseFloat(previcewithdrowTotalString);


    const currentTotalAmount = previceWithdrowTotal + newWithdrowAmoun;
    withdrowTotalElament.innerText = currentTotalAmount;

    const blanceTotalElement = document.getElementById('balance-total');
    const previceBlanceTotalString = blanceTotalElement.innerText;
    const previceBlanceTotal = parseFloat(previceBlanceTotalString);

    const newBlanceTotal = previceBlanceTotal - newWithdrowAmoun;

    blanceTotalElement.innerText = newBlanceTotal;

    withdrowField.value = '';

})