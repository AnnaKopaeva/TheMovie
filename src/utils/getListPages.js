export const getListPages = (page, totalPages) => {
  const listPages = [];

  if (page < 5) {
    // todo: don't use hard code values
    for (let i = 1; i <= 7; i++) {
      listPages.push(i);
    }
    // todo: 123456767
    listPages.push('...', totalPages - 1, totalPages);
  } else if (page >= 5 && page < 8) {
    for (let i = 1; i <= page; i++) {
      listPages.push(i);
    }
    listPages.push(page + 1, page + 2, page + 3, '...', totalPages - 1, totalPages);
  } else if (page < totalPages - 3 && page > totalPages - 8) {
    listPages.push(1, 2, '...');
    listPages.push(page - 3, page - 2, page - 1);
    for (let i = page; i <= totalPages; i++) {
      listPages.push(i);
    }
  } else if (page > totalPages - 8) {
    listPages.push(1, 2, '...');
    for (let i = totalPages - 6; i <= totalPages; i++) {
      listPages.push(i);
    }
  }  else {
    listPages.push(1, 2, '...', page - 3, page - 2, page - 1, page, page + 1, page + 2, page + 3, '...', totalPages - 1, totalPages);
  }

  return listPages;
};

// todo: add a simple doc string for function
// todo: add a test
// todo: move '...' to argument separator
