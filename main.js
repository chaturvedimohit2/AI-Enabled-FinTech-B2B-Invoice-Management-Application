const showHeader =()=>{
  const headerData=JSON.parse(headers);
  const tableRef=document.getElementById("main-table");
  let tableHeader ="<tr>";
  headerData.forEach(element => {
    tableHeader +="<th>" + element + "</th>";
  });
  tableHeader += "</tr>";
  tableRef.innerHTML+= tableHeader;  
}



const showOnLoad =()=>{
  showHeader();
  const tableData=JSON.parse(data);
  const tableRef= document.getElementById("main-table");
  tableData.forEach(tableRow =>{
    let tableEle ="<tr>";
    Object.entries(tableRow).forEach(tableRowEle =>{
      const[key,value]=tableRowEle;
      tableEle += "<td>" + value + "<td>";
    });
    tableEle += "<tr>";
    tableRef.innerHTML +=tableEle;
  })

   
}

/* functions to popup when we click on button add,edit,delete*/
 
function add() {
  console.log("added");
  document.getElementById("adder").style.display = "flex";
  document.getElementById("mainPage").style.filter = "brightness(20%)";
}
function addClose() {
  document.getElementById("adder").style.display = "none";
  document.getElementById("mainPage").style.filter = "none";
}
function deleteM() {
  document.getElementById("del").style.display = "flex";
  document.getElementById("mainPage").style.filter = "brightness(20%)";
}
function deleteMClose() {
  document.getElementById("del").style.display = "none";
  document.getElementById("mainPage").style.filter = "none";
}
function edit() {
  document.getElementById("editior").style.display = "flex";
  document.getElementById("mainPage").style.filter = "brightness(20%)";
}
function editClose() {
  document.getElementById("editior").style.display = "none";
  document.getElementById("mainPage").style.filter = "none";
}

