'use strict';
function kitten(name, Breed, coatColar, Intrests, isGoodWithKids, isGoodWithDog, isGoodWithOtherCat) {
    this.name = name;
    this.Breed = Breed;
    this.coatColar = coatColar;
    this.Intrests = Intrests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDog = isGoodWithDog;
    this.isGoodWithOtherCat = isGoodWithOtherCat;
}
var kittenForm = document.getElementById("addkittenForm");
kittenForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    console.log(name);
    var Breed = event.target.Breed.value;
    console.log(Breed);
    var coatColar = event.target.coatColar.value;
    console.log(coatColar);
    var Intrests = event.target.Intrests.value;
    Intrests = Intrests.split(',');
    console.log(Intrests);
    var isGoodWithKids = event.target.isGoodWithKids.checked;
    var isGoodWithDog = event.target.isGoodWithDog.checked;
    var isGoodWithOtherCat = event.target.isGoodWithOtherCat.checked;
    var newkitten = new kitten(name, Breed, coatColar, Intrests, isGoodWithDog, isGoodWithKids, isGoodWithOtherCat);
    console.log(newkitten);
    newkitten.getage();
    newkitten.render();
}
);
kitten.prototype.getage = function () {
    return randomAge(3, 12) + ' month old';
};
function randomAge(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random);
    return random;
}
kitten.prototype.render = function () {
    var parentElemnt = document.getElementById("kittenProfil");
    var article = document.createElement('article');
    parentElemnt.appendChild(article);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    var p = document.createElement('p');
    p.textContent = this.name + ' is adorble, and is  ' + this.getage();
    article.appendChild(p);
    var ul = document.createElement('ul');
    article.appendChild(ul);
    for (var i = 0; i < this.Intrests.lenght; i++) {
        var li = document.createElement('li');
        li.textContent = this.Intrests[i];
        ul.appendChild(p);
    }
    var table = document.createElement('table');
    article.appendChild(table);
    var row1 = document.createElement('tr');
    table.appendChild(row1);
    var row2 = document.createElement('tr');
    table.appendChild(row2);
    var th1 = document.createElement('th');
    th1.textContent = 'good with kids ';
    row1.appendChild(th1);
    var th2 = document.createElement('th');
    th2.textContent = 'good with Dogs ';
    row1.appendChild(th2);
    var th3 = document.createElement('th');
    th3.textContent = 'good with other cats ';
    row1.appendChild(th3);
    var td1 = document.createElement('td');
    td1.textContent = this.isGoodWithKids;
    row2.appendChild(td1);
    var td2 = document.createElement('td');
    td2.textContent = this.isGoodWithDog;
    row2.appendChild(td2);
    var td3 = document.createElement('td');
    td3.textContent = this.isGoodWithOtherCat;
    row2.appendChild(td3);
    var img = document.createElement('img');
    img.setAttribute('src', 'img/' + this.name + 'jpeg');
    article.appendChild(img);
}