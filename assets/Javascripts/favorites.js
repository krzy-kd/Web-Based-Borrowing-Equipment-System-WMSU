document.addEventListener('DOMContentLoaded', () => {
    const favBtn = document.getElementById('fav-btn');

    if (favBtn) {
        favBtn.addEventListener('click', function() {
            // 1. Alert the user
            alert("This item has been recorded in your favorites!");

            // 2. Optional: Visual toggle (changes the heart to red)
            const heart = this.querySelector('.heart-icon');
            if (heart) {
                heart.classList.toggle('favorited');
                
                // Change style directly or via CSS class
                if (heart.classList.contains('favorited')) {
                    heart.style.color = "red";
                } else {
                    heart.style.color = "inherit";
                }
            }
            
            // 3. Logic for storage (Optional)
            // You could save the item ID to localStorage here
            // localStorage.setItem('favorite_item_01', 'true');
        });
    }
});