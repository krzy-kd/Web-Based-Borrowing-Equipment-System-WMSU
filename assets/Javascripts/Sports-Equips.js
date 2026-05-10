document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemCards = document.querySelectorAll('.item-card');
    const itemDropdown = document.getElementById('item-dropdown'); // Target the dropdown

    // --- 1. Dropdown Navigation Logic ---
    if (itemDropdown) {
        itemDropdown.addEventListener('change', function() {
            const destination = this.value;
            if (destination !== "") {
                window.location.href = destination;
            }
        });
    }

    // --- 2. Simple Search Filter ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            itemCards.forEach(card => {
                const itemName = card.getAttribute('data-name').toLowerCase();
                card.style.display = itemName.includes(query) ? 'block' : 'none';
            });
        });
    }

    // --- 3. Category Buttons Active Toggle ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});