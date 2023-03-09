let Person=[
    {
        "Name":"Faiq",
        "Surname":"Rasulzade",
        "Age":21
    },
    {
        "Name":"Samir",
        "Surname":"Mammedov",
        "Age":19
    },
    {
        "Name":"Faxri",
        "Surname":"Mammedov",
        "Age":19
    },
    {
        "Name":"Elvin",
        "Surname":"Eliyev",
        "Age":21
    },
 ]
// console.log(Person);

// var body=document.querySelector("body");
// var table=document.createElement("table");
// var thead=document.createElement("thead");
// var tbody=document.createElement("tbody");
// var tr=document.createElement("tr");
// var th=document.createElement("th");
// var td=document.createElement("td");
// tr.appendChild(th)
// tr.appendChild(th)
// tr.appendChild(th)


  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${Person[i].Name}`);
      j++
      cell.appendChild(cellText);
      cell.appendChild(document.createTextNode(`${Person[i].Surname}`));
      j++
      cell.appendChild(document.createTextNode(`${Person[i].Age}`));
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
