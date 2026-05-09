const BUDGET_ = JSON.parse(localStorage.getItem('finance')) || [];

const DAROMADLAR = BUDGET_.filter(item => item.type === 'Daromad');



function formatSum(num) {
    return Number(num).toLocaleString('uz-UZ') + " so'm";
}

const ICONS = {
    ish: '💼', freelance: '💻', bonus: '🎁', default: '💰'
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
    DAROMADLAR.forEach(item => total += Number(item.num) || 0);
    document.getElementById('total-daromad').textContent = formatSum(total);
}

function renderCards() {
    const grid = document.getElementById('cards');

    if (!DAROMADLAR.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>📭 Daromad topilmadi</p>
                <span>Hali daromad qo'shilmagan</span>
            </div>`;
        return;
    }

    grid.innerHTML = DAROMADLAR.map((item, i) => `
        <div class="budget-card" style="animation-delay: ${i * 0.06}s">
            <div class="card-header">
                <div class="card-icon daromad">${getIcon(item.kategory)}</div>
                <span class="card-badge daromad">Daromad</span>
            </div>
            <div class="card-amount">${formatSum(item.num)}</div>
            <div class="card-footer">
                <span class="card-kategory">${item.kategory}</span>
                <span class="card-maosh">${item.maosh}</span>
            </div>
            <button class="X-btn"> 🗑</button>
        </div>
    `).join('');
}

renderSummary();
renderCards();