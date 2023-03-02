var req = new XMLHttpRequest();
url = "https://restcountries.com/v3.1/all";

req.open("GET", url, true);

req.send();

req.onload = function () {
  countries_data = Object.values(JSON.parse(this.response));
  countries = [];
  for (var i = 0; i < countries_data.length; i++) {
    countries.push("\n" + countries_data[i].name.common);
  }

  for (var i = 0; i < countries_data.length; i++) {
    header = document.createElement("p");
    header.innerHTML = countries[i];
    document.body.appendChild(header);
  }
}
