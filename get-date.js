const getDate = (covidInfoRow) => {
//want to return date
return covidInfoRow[3]
}


if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
