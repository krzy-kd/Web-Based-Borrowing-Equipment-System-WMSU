document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemCards = document.querySelectorAll('.item-card');

    // Simple Search Filter
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        itemCards.forEach(card => {
            const itemName = card.getAttribute('data-name').toLowerCase();
            card.style.display = itemName.includes(query) ? 'block' : 'none';
        });
    });

    // Category Buttons Active Toggle
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});