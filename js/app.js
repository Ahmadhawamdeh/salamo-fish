var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seattle = {
  Min: 25,
  Max: 62,
  Tavg: 6.1,
  cookiesArray: [],
  RRR: function () {
      var Range = this.Max - this.Min;
      var rand = Math.floor(Math.random() * Range) + this.Min;
      return rand;
  },
  amountOfCookiesPerHourFunction: function () {
      for (i = 0; i < 15; i++) {
          this.amountOfCookiesCeil = Math.ceil(this.Tavg * this.RRR());
          this.cookiesArray.push(this.amountOfCookiesCeil);
      }
      return this.cookiesArray;
  },
}
//seattle log
seattle.amountOfCookiesPerHourFunction();
var Tokyo = {
  Min: 3,
  Max: 24,
  Tavg: 1.2,
  cookiesArray: [],
  Random: function () {
      var Range = this.Max - this.Min;
      var rand = Math.floor(Math.random() * Range) + this.Min;
      return rand;
  },
  amountOfCookiesPerHourFunction: function () {
      for (i = 0; i < 15; i++) {
          this.amountOfCookiesCeil = Math.ceil(this.Tavg * this.Random());
          this.cookiesArray.push(this.amountOfCookiesCeil);
      }
      return this.cookiesArray;
  },
}
//tokyo log
Tokyo.amountOfCookiesPerHourFunction();
var Dubai = {
  Min: 11,
  Max: 38,
  Tavg: 3.7,
  cookiesArray: [],
  Random: function () {
      var Range = this.Max - this.Min;
      var rand = Math.floor(Math.random() * Range) + this.Min;
      return rand;
  },
  amountOfCookiesPerHourFunction: function () {
      for (i = 0; i < 15; i++) {
          this.amountOfCookiesCeil = Math.ceil(this.Tavg * this.Random());
          this.cookiesArray.push(this.amountOfCookiesCeil);
      }
      return this.cookiesArray;
  },
}
//Dubai log
Dubai.amountOfCookiesPerHourFunction();
var Paris = {
  Min: 20,
  Max: 38,
  Tavg: 2.3,
  cookiesArray: [],
  Random: function () {
      var Range = this.Max - this.Min;
      var rand = Math.floor(Math.random() * Range) + this.Min;
      return rand;
  },
  amountOfCookiesPerHourFunction: function () {
      for (i = 0; i < 15; i++) {
          this.amountOfCookiesCeil = Math.ceil(this.Tavg * this.Random());
          this.cookiesArray.push(this.amountOfCookiesCeil);
      }
      return this.cookiesArray;
  },
}
//Paris log
Paris.amountOfCookiesPerHourFunction();
var Lima = {
  Min: 2,
  Max: 16,
  Tavg: 4.6,
  cookiesArray: [],
  Random: function () {
      var Range = this.Max - this.Min;
      var rand = Math.floor(Math.random() * Range) + this.Min;
      return rand;
  },
  amountOfCookiesPerHourFunction: function () {
      for (i = 0; i < 15; i++) {
          this.amountOfCookiesCeil = Math.ceil(this.Tavg * this.Random());
          this.cookiesArray.push(this.amountOfCookiesCeil);
      }
      return this.cookiesArray;
  },
}
//lima log
Lima.amountOfCookiesPerHourFunction();
Arraylab = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
Tarray = [seattle, Tokyo, Dubai, Paris, Lima];
for (let j = 0; j < Arraylab.length; j++) {
  var TTcounter = 0;
  document.write("<h2>", "* ", Arraylab[j], "</h2>");
  document.write("<ul>");
  for (i = 0; i < 15; i++) {
      TTcounter += Tarray[j].cookiesArray[i];
      document.write("<li>");
      document.write(Hours[i], ": ", Tarray[j].cookiesArray[i], " Cookies.");
      document.write("<br>");
      document.write("</li>");
  }
  document.write("<li>", "Total : ", TTcounter, " Cookies.");
  document.write("</ul>")}