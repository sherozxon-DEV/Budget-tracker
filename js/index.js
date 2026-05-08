const formEvent = document.querySelector('.form-event');
const btnIncome = document.getElementById('btn-income');
const btnExpense = document.getElementById('btn-expense');
const inputMaosh = document.querySelector('.Input-maosh');
const inputNUM = document.querySelector('.Input-NUM');

let selectedType = "Daromad"; // default

btnIncome.addEventListener('click', function () {
    selectedType = "Daromad";
    btnIncome.className = 'type-btn active-income';
    btnExpense.className = 'type-btn';
});

btnExpense.addEventListener('click', function () {
    selectedType = "Xarajat";
    btnExpense.className = 'type-btn active-expense';
    btnIncome.className = 'type-btn';
});

formEvent.addEventListener('submit', (e) => {
    e.preventDefault();

    const select = document.getElementById("kategoriya");

    const OBJ = {
        type: selectedType,
        kategory: select.value,
        maosh: inputMaosh.value,
        num: inputNUM.value,
    };

    formEvent.reset()

    console.log(OBJ);
});