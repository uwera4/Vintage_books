document.querySelector('.search input').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const categoryName = category.querySelector('h2').textContent.toLowerCase();
        if (categoryName.includes(searchTerm)) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
});

function showBookDetails(category) {
    const modal = document.getElementById("bookModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    const bookDetails = {
        classics: {
            title: "Classics",
            description: "Explore timeless literature that has shaped history and culture."
        },
        rare: {
            title: "Rare Finds",
            description: "Discover rare and exclusive books from around the world."
        },
        poetry: {
            title: "Poetry",
            description: "Dive into lyrical expressions and the beauty of poetic language."
        },
        biographies: {
            title: "Biographies",
            description: "Read inspiring life stories of great personalities."
        }
    };

    const selectedCategory = bookDetails[category];
    modalTitle.textContent = selectedCategory.title;
    modalDescription.textContent = selectedCategory.description;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("bookModal");
    modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById("bookModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};