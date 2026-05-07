const btnIncome = document.getElementById('btn-income');
const btnExpense = document.getElementById('btn-expense');

btnIncome.addEventListener('click', function () {
    btnIncome.className = 'type-btn active-income';
    btnExpense.className = 'type-btn';
});

btnExpense.addEventListener('click', function () {
    btnExpense.className = 'type-btn active-expense';
    btnIncome.className = 'type-btn';
});