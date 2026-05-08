
const BUDGET_X = JSON.parse(localStorage.getItem('finance')) || [];

const Xarajatlar = BUDGET_X.filter(e => e.type === 'Xarajat');



function formatSum(num) {
    return Number(num).toLocaleString('uz-UZ') + " so'm";
}

const ICONS = {
    oziq: '🛒', transport: '🚗', kommunal: '💡',
    kiyim: '👔', salomatlik: '💊', default: '💸'
};

function getIcon(kat) {
    const k = (kat || '').toLowerCase();
    for (const key in ICONS) {
        if (k.includes(key)) return ICONS[key];
    }
    return ICONS.default;
}

function renderSummary() {
    let total = 0;
    Xarajatlar.forEach(item => total += Number(item.num) || 0);
    document.getElementById('total-xarajat').textContent = formatSum(total);
}

function renderCards() {
    const grid = document.getElementById('cards');

    if (!Xarajatlar.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>📭 Xarajat topilmadi</p>
                <span>Hali xarajat qo'shilmagan</span>
            </div>`;
        return;
    }

    grid.innerHTML = Xarajatlar.map((item, i) => `
        <div class="budget-card" style="animation-delay: ${i * 0.06}s">
            <div class="card-header">
                <div class="card-icon xarajat">${getIcon(item.kategory)}</div>
                <span class="card-badge xarajat">Xarajat</span>
            </div>
            <div class="card-amount">${formatSum(item.num)}</div>
            <div class="card-footer">
                <span class="card-kategory">${item.kategory}</span>
                <span class="card-maosh">${item.maosh}</span>
            </div>
        </div>
    `).join('');
}

renderSummary();
renderCards();