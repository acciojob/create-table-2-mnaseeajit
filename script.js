function createTable() {
    let table = document.getElementById("myTable");
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            let data = document.createElement("td");
            data.innerText = `Row-${i} Column-${j}`;
            row.appendChild(data);
        }
        table.appendChild(row);
    }
}

