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
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let i = 0; i < Person.length; i++) {
    const row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      if(j==0){
        var cellText = document.createTextNode(`${Person[i].Name}`);
       // i=0;
      }
    else if(j==1){
        var cellText = document.createTextNode(`${Person[i].Surname}`);
        //console.log("Faig")
      }
    else if(j==2){
      var cellText=document.createTextNode(`${Person[i].Age}`)
        //cell.appendChild(document.createTextNode(`${Person[i].Age}`));
       // break;
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
