// Sample book data with more details
const books = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 12.99,
      rating: 4.5,
      cover: "https://m.media-amazon.com/images/I/81PYOG5FQBL._AC_UF1000,1000_QL80_.jpg",
      genres: ["Thriller", "Mystery", "Psychological"],
      description: "A psychological thriller about a woman who shoots her husband and then stops speaking."
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 14.99,
      rating: 4.7,
      cover: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
      genres: ["Self-Help", "Non-Fiction", "Productivity"],
      description: "An easy & proven way to build good habits & break bad ones."
    },
    // Add more books as needed
  ];
  
  // Display all books on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);
  });
  
  function displayBooks(booksToDisplay) {
    const bookGrid = document.querySelector('.book-grid');
    bookGrid.innerHTML = booksToDisplay.map(book => `
      <div class="book-card">
        <div class="book-cover" style="background-image: url('${book.cover}')"></div>
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div>
            ${book.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <p class="book-price">$${book.price.toFixed(2)}</p>
            <span style="color: #ffc107;">★ ${book.rating}</span>
          </div>
          <a href="book-details.html?id=${book.id}" class="btn" style="display: block; text-align: center; margin-top: 1rem;">View Details</a>
        </div>
      </div>
    `).join('');
  }
  
  // Search functionality
  document.querySelector('.search-bar button').addEventListener('click', searchBooks);
  
  function searchBooks() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.genres.some(genre => genre.toLowerCase().includes(searchTerm))
    );
    displayBooks(filtered);
  }
