const getRow = (rowString) => {
  return rowString.split(',');
}





if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;


