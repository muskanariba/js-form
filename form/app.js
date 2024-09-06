// function expanded (){
//     var expand = "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre.s"
//      document.getElementById("para").innerHTML = expand
// }


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
var name1 = document.getElementById("name1").value;
var age1 = document.getElementById("age1").value;
var classname1 = document.getElementById("classname1").value;
var password1 = document.getElementById("password1").value;

var displayData = "Name: " + name1 + "<br>Age: " + age1 +  "<br>Classname: " + classname1 + "<br>Password: " + password1;
document.getElementById('displayData').innerHTML = displayData;
})



document.getElementById('studentform').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var classname = document.getElementById('classname').value;

    var table = document.getElementById("studenttable").querySelector('tbody');
    var trnew = table.insertRow();
    var td0 = trnew.insertCell(0);
    var td1 = trnew.insertCell(1);
    var td2 = trnew.insertCell(2);
    var td3 = trnew.insertCell(3);

    td0.innerHTML = name;
    td1.innerHTML = age;
    td2.innerHTML = classname;
    td3.innerHTML = `
        <button onclick="editRow(this)" class="edit3" >Edit</button>
        <button onclick="deleteRow(this)" class="edit2">Delete</button>
    `;

    document.getElementById("studentform").reset();
});

function deleteRow(button) {
    var tr = button.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
}

function editRow(button) {
    var tr = button.parentNode.parentNode;
    var index = tr.rowIndex - 1; 

    var name = tr.cells[0].innerHTML;
    var age = tr.cells[1].innerHTML;
    var classname = tr.cells[2].innerHTML;

    document.getElementById("editIndex").value = index;
    document.getElementById("editname").value = name;
    document.getElementById("editage").value = age;
    document.getElementById("editclass").value = classname;

    document.getElementById("editformcontent").classList.remove("hidden");
}

document.getElementById('editform').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var index = document.getElementById("editIndex").value;
    var name = document.getElementById("editname").value;
    var age = document.getElementById("editage").value;
    var classname = document.getElementById("editclass").value;


    var table = document.getElementById("studenttable").querySelector('tbody');
    var tr = table.rows[index];

    tr.cells[0].innerHTML = name;
    tr.cells[1].innerHTML = age;
    tr.cells[2].innerHTML = classname;


    document.getElementById("editformcontent").classList.add("hidden");
    document.getElementById("editform").reset();
});