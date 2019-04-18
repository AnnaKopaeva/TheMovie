export const getListPages = (page, totalPages, separator = '...') => {
  const listPages = [];

  if (totalPages < 8) {
    // if total count of page less 8
    for (let i = 1; i <= 7; i++) {
      listPages.push(i);
    }

  } else if (page < 5) {
    // if active page less 5
    for (let i = 1; i <= 7; i++) {
      listPages.push(i);
    }
    listPages.push(separator, totalPages - 1, totalPages);

  } else if (page >= 5 && page < 8) {
    // if active page less 8 but more than 5
    for (let i = 1; i <= page; i++) {
      listPages.push(i);
    }
    listPages.push(
      page + 1, page + 2, page + 3,
      separator,
      totalPages - 1, totalPages);

  } else if (page < totalPages - 3 && page > totalPages - 8) {
    // if active page less than total count of page minus 8
    // but more than total count of page minus 3
    listPages.push(1, 2, separator);
    listPages.push(page - 3, page - 2, page - 1);
    for (let i = page; i <= totalPages; i++) {
      listPages.push(i);
    }

  } else if (page > totalPages - 8) {
    // if active page mare than total count of page minus 8
    listPages.push(1, 2, separator);
    for (let i = totalPages - 6; i <= totalPages; i++) {
      listPages.push(i);
    }

  } else {
    // in other cases
    listPages.push(
      1, 2, separator,
      page - 3, page - 2, page - 1,
      page,
      page + 1, page + 2, page + 3,
      separator, totalPages - 1, totalPages,
    );
  }

  return listPages;
};
