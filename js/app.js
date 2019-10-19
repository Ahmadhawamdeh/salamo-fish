'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];//14

var mainstorage = document.getElementById('newform2');

var F_Row;
var table = document.createElement('table');
mainstorage.appendChild(table);
table.setAttribute('cellspacing', '10px');

function AddElement(tagName, mainstorage, text) {
    var element = document.createElement(tagName);
    mainstorage.appendChild(element);

    if (text) {
        element.textContent = text;
    }

    return element;
}

//var identi
function Shop(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgcookie = avg;
    this.cook_number = [];
    this.bigTotal = 0;

    this.generateHourlySales();
}

Shop.prototype.avgNumCus = function () {
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
};

Shop.prototype.generateHourlySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var cookisonehour = Math.ceil(this.avgNumCus() * this.avgcookie);
        this.cook_number.push(cookisonehour);
        this.bigTotal += cookisonehour;
    }
    console.log(this.cook_number);
};
//table1
Shop.prototype.renderRow = function (table) {

    var salesRow = AddElement('tr', table);
    AddElement('td', salesRow, this.location);

    for (var i = 0; i < this.cook_number.length; i++) {
        var currentHourlySales = this.cook_number[i];
        AddElement('td', salesRow, currentHourlySales);
    }

    AddElement('td', salesRow, this.bigTotal);
};

function H_Row() {

    var hourRow = AddElement('tr', table);

    AddElement('th', hourRow);

    for (var i = 0; i < hours.length; i++) {
        AddElement('th', hourRow, hours[i]);
    }

    AddElement('th', hourRow, 'M_Totals');
}

function CF_Row() {

    console.log('F_Row');

    var tr = document.createElement('tr');

    F_Row = tr;

    table.appendChild(tr);

    var td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = 'Totals';

    var megaTotal = 0;

    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {

        td = document.createElement('td');

        tr.appendChild(td);

        var totalHourSales = 0;

        for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {
            var shop = shops[shopIndex];
            totalHourSales += shop.cook_number[hourIndex];
        }

        td.textContent = totalHourSales;

        megaTotal += totalHourSales;
    }

    td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = megaTotal;
}

//colomin
var shops = [];
shops.push(new Shop('seattle', 21, 59, 6.1));
shops.push(new Shop('tokyo', 3, 20, 1.4));
shops.push(new Shop('dubai', 18, 32, 3.5));
shops.push(new Shop('paris', 20, 38, 2.2));
shops.push(new Shop('lima', 4, 17, 4.1));


H_Row();

for (var i = 0; i < shops.length; i++) {
    var currentShop = shops[i];
    currentShop.renderRow(table);
}

CF_Row();
//new table_sss
function SU_Hand(event) {
    event.preventDefault();

    var N_of_Location = event.target.location.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avgSales = parseFloat(event.target.avgSales.value);

    var center = new Shop(N_of_Location, min, max, avgSales);

    shops.push(center);

    table.removeChild(F_Row);

    center.renderRow(table);

    CF_Row();

}
var form = document.getElementById('newform');
form.addEventListener('submit', SU_Hand);