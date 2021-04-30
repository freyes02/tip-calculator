document.querySelector('#tip').onchange = function () {
    var bill = Number(document.getElementById('check').value);
    var tipr = Number(document.getElementById('tipper').value);
    var spl = Number(document.getElementById('split').value);

    var tipA = bill * (tipr / 100)
    var finalbill = bill + tipA
    var finalbillspl = finalbill / spl

    var t1 = document.querySelector('#tipamount')
    var t2 = document.querySelector('#total')
    var t3 = document.querySelector('#totals')

    t1.value = tipA.toFixed(2);
    t2.value = finalbill.toFixed(2);
    t3.value = finalbillspl.toFixed(2);
}