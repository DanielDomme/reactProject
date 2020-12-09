export function sortObjectArrayDescendingByAttribute(objectArray, objectItemToSortBy) {
  if (typeof objectArray[0][objectItemToSortBy] === 'string') {
    objectArray.sort((a, b) => {
      const sA = a[objectItemToSortBy].toLowerCase();
      const sB = b[objectItemToSortBy].toLowerCase();

      if (sA > sB) {
        return -1;
      }
      if (sA < sB) {
        return 1;
      }
      return 0;
    });
  } else if (Object.prototype.toString.call(objectArray[0][objectItemToSortBy]) === '[object Date]' && !Number.isNaN(objectArray[0][objectItemToSortBy])) {
    objectArray.sort((a, b) => new Date(b[objectItemToSortBy]) - new Date(a[objectItemToSortBy]));
  } else {
    objectArray.sort((a, b) => b[objectItemToSortBy] - a[objectItemToSortBy]);
  }
}

export function sortObjectArrayAscendingByAttribute(objectArray, objectItemToSortBy) {
  if (typeof objectArray[0][objectItemToSortBy] === 'string') {
    objectArray.sort((a, b) => {
      const sA = a[objectItemToSortBy].toLowerCase();
      const sB = b[objectItemToSortBy].toLowerCase();

      if (sA < sB) {
        return -1;
      }
      if (sA > sB) {
        return 1;
      }
      return 0;
    });
  } else if (Object.prototype.toString.call(objectArray[0][objectItemToSortBy]) === '[object Date]' && !Number.isNaN(objectArray[0][objectItemToSortBy])) {
    objectArray.sort((a, b) => new Date(a[objectItemToSortBy]) - new Date(b[objectItemToSortBy]));
  } else {
    objectArray.sort((a, b) => a[objectItemToSortBy] - b[objectItemToSortBy]);
  }
}