const BUDGET_B = JSON.parse(localStorage.getItem('finance')) || [];

// Demo data
if (!BUDGET_B.length) {
    BUDGET_B.push(
        { type: "Daromad", kategory: "ish", maosh: "oylik", num: "5000000" },
        { type: "Daromad", kategory: "freelance", maosh: "loyiha", num: "2500000" },
        { type: "Xarajat", kategory: "oziq-ovqat", maosh: "kunlik", num: "300000" },
        { type: "Xarajat", kategory: "transport", maosh: "oylik", num: "200000" },
        { type: "Daromad", kategory: "bonus", maosh: "yillik", num: "1000000" },
        { type: "Xarajat", kategory: "kommunal", maosh: "oylik", num: "500000" },
    );
}

function formatSum(num) {
    return Number(num).toLocaleString('uz-UZ') + " so'm";
}

const ICONS = {
    ish: '💼', freelance: '💻', bonus: '🎁',
    oziq: '🛒', transport: '🚗', kommunal: '💡',
    kiyim: '👔', salomatlik: '💊', default: '💰'
};

function getIcon(kat) {
    const k = (kat || '').toLowerCase();
    for (const key in ICONS) {
        if (k.includes(key)) return ICONS[key];
    }
    return ICONS.default;
}

function renderSummary() {
    let totalD = 0, totalX = 0;

    BUDGET_B.forEach(item => {
        const amt = Number(item.num) || 0;
        if (item.type === 'Daromad') totalD += amt;
        else totalX += amt;
    });

    const balans = totalD - totalX;

    document.getElementById('total-daromad').textContent = formatSum(totalD);
    document.getElementById('total-xarajat').textContent = formatSum(totalX);

    const balEl = document.getElementById('total-balans');
    balEl.textContent = formatSum(balans);
    balEl.style.color = balans >= 0 ? '#4a6cf7' : '#e05252';
}

function renderCards() {
    const grid = document.getElementById('cards');

    if (!BUDGET_B.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>📭 Tranzaksiya topilmadi</p>
                <span>Hali hech narsa qo'shilmagan</span>
            </div>`;
        return;
    }

    grid.innerHTML = BUDGET_B.map((item, i) => {
        const isD = item.type === 'Daromad';
        const cls = isD ? 'daromad' : 'xarajat';
        return `
        <div class="budget-card" style="animation-delay: ${i * 0.06}s">
            <div class="card-header">
                <div class="card-icon ${cls}">${getIcon(item.kategory)}</div>
                <span class="card-badge ${cls}">${item.type}</span>
            </div>
            <div class="card-amount">${formatSum(item.num)}</div>
            <div class="card-footer">
                <span class="card-kategory">${item.kategory}</span>
                <span class="card-maosh">${item.maosh}</span>
            </div>
        </div>`;
    }).join('');
}

renderSummary();
renderCards();