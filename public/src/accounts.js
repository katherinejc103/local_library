function findById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function findAccountById(accounts, id) {
 const found = findById(accounts, id);
 return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1 )
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let total= 0
 
  for (let id in books) {   
    const borrowedBooks = books[id].borrows.filter((book) => book.id === account.id)
    total += borrowedBooks.length 
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  var checkedOutBooks = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === account.id && !borrow.returned);
  });

  checkedOutBooks.forEach(book => {
    book.author = authors.find(author => author.id === book.authorId);
  });

  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
