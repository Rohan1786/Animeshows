const searchInput = document.getElementById('search');

        // Get all anime items
        const animeItems = document.querySelectorAll('#doremon');

        // Add event listener for input change
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase(); // Convert input value to lowercase for case-insensitive search

            // Loop through all anime items
            animeItems.forEach(item => {
                const animeTitle = item.querySelector('h5').textContent.toLowerCase(); // Get the anime title
                const animeDescription = item.querySelector('p').textContent.toLowerCase(); // Get the anime description

                // Check if the search term matches the title or description of the anime
                if (animeTitle.includes(searchTerm) || animeDescription.includes(searchTerm)) {
                    item.style.display = 'block'; // Show the anime item
                } else {
                    item.style.display = 'none'; // Hide the anime item
                }
            });
        });