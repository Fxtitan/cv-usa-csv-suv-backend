const getRows = (csvString) => {
  let result = [];
  let newLinesSplit = csvString.split('\n')
  for (let i = 0; i < newLinesSplit.length; i++) {
    result.push(newLinesSplit[i].split(','))
  }
  return result
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
