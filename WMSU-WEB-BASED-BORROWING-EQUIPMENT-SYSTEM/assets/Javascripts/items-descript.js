// Function to handle thumbnail clicks
function swapImage(imagePath) {
    const mainImage = document.getElementById('main-target');
    if (imagePath) {
        mainImage.src = imagePath;
    }
}

// Function to handle Favorite button toggle
document.getElementById('fav-btn').addEventListener('click', function() {
    const activeColor = 'rgb(255, 240, 240)'; // Light pink
    
    if (this.style.backgroundColor === activeColor) {
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = activeColor;
    }
});