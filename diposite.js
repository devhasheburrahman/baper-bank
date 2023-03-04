document.getElementById('btn-diposite').addEventListener('click', function () {

    const dipositeField = document.getElementById('diposite-field');

    const newDipositeAmountString = dipositeField.value;


    const newDipositeAmount = parseFloat(newDipositeAmountString);

    const newDipositeTotalElement = document.getElementById('diposite-total');
   

    const previceDipositeTotalString = newDipositeTotalElement.innerText;

    const previceDipositeTotal = parseFloat(previceDipositeTotalString);

    const currentDipositeTotal = previceDipositeTotal + newDipositeAmount;

    newDipositeTotalElement.innerText = currentDipositeTotal;

    //   blancr total element 
    const blanceTotalElement = document.getElementById('balance-total');
    const previceBlanceTotalString = blanceTotalElement.innerText;
    const previceBlanceTotal = parseFloat(previceBlanceTotalString);

    const currentTotalBlance = previceBlanceTotal + newDipositeAmount;

    blanceTotalElement.innerText = currentTotalBlance;





    dipositeField.value = '';
})