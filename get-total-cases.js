const getTotalCases = (covidInfoRows) => {
return covidInfoRows[4];
}







if (typeof getTotalCases === 'undefined') {
  getTotalCases = undefined;
}


module.exports = getTotalCases;
