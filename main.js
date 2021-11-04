var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}




//Retrieve the data
function readFormData(){
    var formData = {};
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["location"] = document.getElementById("location").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.idNumber;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.fullName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.location;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('idNumber').value = selectedRow.cells[0].innerHTML;
    document.getElementById('fullName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('location').value = selectedRow.cells[2].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.idNumber;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.gender;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('idNumber').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('location').value = '';
    document.getElementById('gender').value = '';
}
