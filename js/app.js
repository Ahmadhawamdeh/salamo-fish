'use strict';
var hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var Locations = [];//eslint-disable-line
var salesTable = document.getElementById('salmonTable');
function HeaderRow() { //eslint-disable-line
var tableRs = document.createElement('tr');
for (var i = 0; i <= hours.length; i++) {
 var thElement = document.createElement('th');
 thElement.textContent = hours[i-1];
 tableRs.appendChild(thElement);
}
thElement = document.createElement('th');
thElement.textContent = '          Total';
tableRs.appendChild(thElement);
//  console.log(salesTable);
salesTable.appendChild(tableRs);
};
function Store(name, minCust, maxcust, avgcook) {
this.name = name;
this.minCust = minCust;
this.maxCust = maxcust;
this.avgCookie = avgcook;
this.avgCustArray = [];
this.cookiessinglehourArray = [];
this.totalCookies = 0;
Locations.push(this);
}
Store.prototype.numCustHourly = function() {
for (var i = 0; i <= hours.length; i++) {
 var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
 this.avgCustArray.push(singleHourCust);
}
};
Store.prototype.cookiesPerCustomer = function() {
this.numCustHourly();
for (var i = 0; i < hours.length; i++) {
 var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
 this.cookiessinglehourArray.push(singleHourCookies);
 this.totalCookies += singleHourCookies;
}
};
Store.prototype.render = function() {
this.cookiesPerCustomer();
var trRowName = document.createElement('tr');
var tdStore = document.createElement('td');
tdStore.textContent = this.name;
trRowName.appendChild(tdStore);
for (var i = 0; i < this.cookiessinglehourArray.length; i++) {
 var tdCell = document.createElement('td');
 tdCell.textContent = this.cookiessinglehourArray[i];
 trRowName.appendChild(tdCell);
};
var tdTotal = document.createElement('td');
tdTotal.textContent = this.totalCookies;
trRowName.appendChild(tdTotal);
salesTable.appendChild(trRowName);
};
var Seattle = new Store('Seattle', 2, 16, 4.6);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai' , 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 23, 65, 6.3);
function renderAllStores() {
for (var i = 0; i < Locations.length; i++) {
 Locations[i].render();
}
};
function makeFooterRow() { //eslint-disable-line
var tableRs = document.createElement('tr');
tableRs.textContent = 'Totals';
salesTable.appendChild(tableRs);
var bigerTotal = 0;
for (var i = 0; i < hours.length; i++) {
 var hourlyTotal = 0;
 for (var j = 0; j < Locations.length; j++) {
   hourlyTotal = hourlyTotal + Locations[j].cookiessinglehourArray[i];
   bigerTotal += Locations[j].cookiessinglehourArray[i];
   console.log(bigerTotal);
 }
 var tdElement = document.createElement('td');
 tdElement.textContent = hourlyTotal;
 tableRs.appendChild(tdElement);
}
tdElement = document.createElement('td');
tdElement.textContent = bigerTotal;
tableRs.appendChild(tdElement);
};
HeaderRow();
renderAllStores();
makeFooterRow();