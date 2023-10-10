function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found
}

function findBookById(books, id) {
  let foundObj = books.find((book) => book.id === id)
  return foundObj
}


function partitionBooksByBorrowedStatus(books) {
    const booksOut = books.filter((book) => book.borrows[0].returned === false);
    const booksIn = books.filter((book) => book.borrows[0].returned === true);
    return [booksOut, booksIn];
}


function getBorrowersForBook(book, accounts) {
    let borrowers = [];

    book.borrows.forEach(borrow => {
        let account = accounts.find(acc => acc.id === borrow.id);
        if (account) {
            account.returned = borrow.returned;
            borrowers.push(account);
        }
    });

    return borrowers.slice(0, 10); 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
