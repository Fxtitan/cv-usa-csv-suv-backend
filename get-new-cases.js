const getNewCases = (covidInfoRowNumber) => {
  return covidInfoRowNumber[5];
}







if (typeof getNewCases === 'undefined') {
  getNewCases = undefined;
}


module.exports = getNewCases;
