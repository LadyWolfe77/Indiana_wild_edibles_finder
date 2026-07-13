document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-link');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the specific category value clicked
            const selectedCategory = link.getAttribute('data-target');

            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');

                // If "Show All" is clicked, or the post matches the selected category, show it
                if (selectedCategory === 'all' || postCategory === selectedCategory) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none'; // Smoothly hides unmatched posts
                }
            });

            // Optional: Highlight the currently active category link visually
            categoryLinks.forEach(lnk => lnk.style.fontWeight = 'normal');
            link.style.fontWeight = 'bold';
        });
    });
});
