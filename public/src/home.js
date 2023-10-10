function getTotalBooksCount(books) {
 return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
    let borrowedBooks = 0;
  for (let i =0;i<books.length;i++){
      if(!books[i].borrows[0].returned)
      borrowedBooks++;
    }
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  let genreCounts = {};

  books.forEach(book => {
    if (genreCounts[book.genre]) {
      genreCounts[book.genre]++;
    } else {
      genreCounts[book.genre] = 1;
    }
  });

  let sortedGenres = Object.keys(genreCounts).map(genre => {
    return { name: genre, count: genreCounts[genre] };
  });

  sortedGenres.sort((genreA, genreB) => genreB.count - genreA.count);

  return sortedGenres.slice(0, 5); 
}

function getMostPopularBooks(books) {
  let bookCounts = {};

  books.forEach(book => {
    if (bookCounts[book.title]) {
      bookCounts[book.title] += book.borrows.length;
    } else {
      bookCounts[book.title] = book.borrows.length;
    }
  });

  let sortedBooks = Object.keys(bookCounts).map(title => {
    return { name: title, count: bookCounts[title] };
  });

  sortedBooks.sort((bookA, bookB) => bookB.count - bookA.count);

  return sortedBooks.slice(0, 5);  
}

function getMostPopularAuthors(books, authors) {
  let authorCounts = authors.map(author => {
    let booksByAuthor = books.filter(book => book.authorId === author.id);
    let count = booksByAuthor.reduce((total, book) => total + book.borrows.length, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: count };
  });
  authorCounts.sort((a, b) => b.count - a.count);
  return authorCounts.slice(0, 5);;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
