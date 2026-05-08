const BUDGET = JSON.parse(localStorage.getItem('finance')) || []

const formEvent = document.querySelector('.form-event');
const btnIncome = document.getElementById('btn-income');
const btnExpense = document.getElementById('btn-expense');
const inputMaosh = document.querySelector('.Input-maosh');
const inputNUM = document.querySelector('.Input-NUM');

let selectedType = "Daromad";

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

// ✅  setLocal funksiyasi
const setLocal = () => {
    localStorage.setItem('finance', JSON.stringify(BUDGET)); // BUDGET qo'shildi
}

// get local
// const getlocal = () => {
//     const data = JSON.parse(localStorage.getItem('finance')) || [];
//     return data

// }


console.log(BUDGET);


formEvent.addEventListener('submit', (e) => {
    e.preventDefault();

    const select = document.getElementById("kategoriya");

    const OBJ = {
        type: selectedType,
        kategory: select.value,
        maosh: inputMaosh.value,
        num: inputNUM.value,
    };

    BUDGET.push(OBJ);

    setLocal(); // ✅ Submit bo'lganda LocalStorage ga saqlaydi

    formEvent.reset();

    console.log(OBJ);
    console.log(BUDGET);
});