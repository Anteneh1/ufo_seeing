// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
var x = tableData.forEach((ufoSeeing) => {
    var row =tbody.append('tr');
    Object.entries(ufoSeeing).forEach(([key,value]) => {
        var cell = tbody.append('td');
        cell.text(value);
    
    
    });
});


 var filterTable = d3.select("#filter-btn");
filterTable.on("click", function()  {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var inputDate = d3.select(".form-control");
    console.log(inputDate);

    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredDate = tableData.filter(sawDate => sawDate.datetime == inputValue);
    console.log(filteredDate);
    

    filteredDate.forEach((seeing) => {
        var row = tbody.append("tr");
        Object.entries(seeing).forEach(([ key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});  

/* function filterDate(inputDate) {
    var inputDate = data;
    var tbody = d3.select("tbody");
   return  inputDate.forEach((seeing) => {
        var row = tbody.append("tr");
        Object.entries(seeing).forEach(([ key, value]) =>{
            var cell =tbody.append("td");
            cell.text(value);
        });
    });

}; */

/* function myFunction() {
    var input, filter, table, tr, td, i;
    input = d3.select(".form-control");
    console.log(input);
    filter = input.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
}
        }
    }
} */

    


