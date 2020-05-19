import "./styles.css";

class TableBodyContents {
  constructor(url) {
    this.body = [];
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        this.body = json;
      });
  }

  getBody() {
    return this.body;
  }
}

// Fills the table with data in json format:
function fillTable(data) {
  console.log(data);
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  data.forEach(item => {
    let row = tableBody.insertRow();
    Object.values(item).forEach(value => {
      let td = document.createElement("td");
      td.innerHTML = value;
      row.appendChild(td);
    });
  });
}

document.loadItems = function() {
  const bodyContent = new TableBodyContents("./src/items.json");
  fillTable(bodyContent.getBody());
};
