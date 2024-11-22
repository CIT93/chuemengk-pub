
const TBL = document.getElementById("tab-data");

const nameInput = document.getElementById("nameInput"); // Form input for Name
const householdInput = document.getElementById("householdInput"); // Form input for HouseHold
const houseSizeInput = document.getElementById("houseSizeInput"); // Form input for HouseSize
const footprintInput = document.getElementById("footprintInput"); // Form input for Footprint

// Assuming you have a submit button to update the data after editing
const submitEditButton = document.getElementById("submitEditButton"); 

let editingIndex = null;  // To keep track of which row is being edited
function renderHeading()
{
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize","Footprint","Actions"];
    headingTextArr.forEach(function(text)
        {
            const th = document.createElement("th");
            th.textContent = text;
            tr.appendChild(th);
            
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        return table;

}

function renderTblBtn(index, data)
{
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e){
        console.log('Hello from inside the action button');
        console.log(e);
        data.splice(index, 1);
        renderTbl(data);
        deleteTableHeading();

    });
    btnEdit.addEventListener('click', function(e){
        console.log('Hello from inside the action button');
        const row = e.target.closest('tr');  // Find the closest table row
        const rowData = Array.from(row.children).map(cell => cell.textContent);
        
        // Fill the form inputs with the row data
        nameInput.value = rowData[0]; 
        householdInput.value = rowData[1]; 
        houseSizeInput.value = rowData[2]; 
        footprintInput.value = rowData[3];

        // Delete the row after filling the form
        row.remove();

        // Save the index of the row being edited
        editingIndex = index;
        
        if (editingIndex !== null) {
            const updatedData = {
                name: nameInput.value,
                household: householdInput.value,
                houseSize: houseSizeInput.value,
                footprint: footprintInput.value
            };
    
            // Update the data array at the correct index
            data[editingIndex] = updatedData;
            
            // Re-render the table with the updated data
            renderTbl(data);
            
            // Reset the form
            nameInput.value = "";
            householdInput.value = "";
            houseSizeInput.value = "";
            footprintInput.value = "";
            
            // Clear the editing index
            editingIndex = null;
        }
    });
    return td;
}

function renderTblBody(data)
{
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index){ 
        console.log(index);
        const tr = document.createElement("tr");
        for(const [key, value ] of Object.entries(obj)){
            console.log(`key ${key} value ${value}`);
            if( key !== "lastname" && key !== "houseMPTS" && key !== "houseSPTS" ){
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
     });
     return tbody;
}

function renderTbl(data)
{
    const table = renderHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
}
function deleteTableHeading()
{
    TBL.innerHTML = "";
}


export{renderTbl, deleteTableHeading};