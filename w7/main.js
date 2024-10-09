import { renderTbl } from "./render.js";

const FORM = document.getElementById("form"); 
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePoints(householdSize){
    let houseSizePoints = 0;
    if(householdSize === "Large")
    {
        houseSizePoints = 10;
    }
    else if(householdSize === "Medium")
    {
        houseSizePoints = 7;
    }
    else if(householdSize === "Small")
    {
        houseSizePoints = 4;
    }
    else if(householdSize === "Apartment")
    {
        houseSizePoints = 2;
    }
    return houseSizePoints;
}


function determineHouseholdPoints(numberInHousehold) {
    let householdPoints = 0;
    if(numberInHousehold === 1)
        {
            householdPoints = 14;
        }
        else if(numberInHousehold === 2)
        {
            householdPoints = 12;
        }
        else if(numberInHousehold === 3)
        {
            householdPoints = 10;
        }
        else if(numberInHousehold === 4)
        {
            householdPoints = 8;
        }
        else if(numberInHousehold === 5)
        {
            householdPoints = 6;
        }
        else if(numberInHousehold === 6)
        {
            householdPoints = 4;
        }
        else if(numberInHousehold > 7)
        {
            householdPoints = 2;
        }
        return householdPoints;              
    }
function start(first, last, householdNumbers, houseSize)
{
    const housePoints = determineHouseholdPoints(householdNumbers);
    const sizePoints = determineHouseSizePoints(houseSize);
    const total = housePoints + sizePoints;
    cfpData.push({
        firstname: first,
        lastname: last,
        houseM: householdNumbers,
        houseS: houseSize,
        houseMPTS: housePoints,
        houseSPTS: sizePoints,
        cfpTotal: total
    });
}
/*
function displayOutput()
{
    for(object of cfpData)
        {
            console.log(object);
            const newH2 = document.createElement("h2");
            newH2.textContent = `Carbon Footprint Total is ${object.cfpTotal}`;
            const newH3 = document.createElement("h3");
            newH3.textContent = `Based on number in and size of home for ${object.firstname} ${object.lastname}`;
            const newP = document.createElement("p");
            newP.textContent = `This number is based on the number of people in the house of ${object.houseM} (score ${object.houseMPTS})`;
            newP.textContent += ` and a ${object.houseS} size of home (score: ${object.houseSPTS})`;
            OUTPUT.appendChild(newH2);
            OUTPUT.appendChild(newH3);
            OUTPUT.appendChild(newP);
        }
        
}*/
//What would you do to make this code more manageable overtime?
//
//Code Challenge: creating table body from html into hard code in main.js
//I tried to create the code for the table body but I was unable to replicate the results.


//Q: why did we get an "Uncaught ReferenceError"
//R: because td is not defined outside its block scope
//displayOutput();

//notes for index.html :
// using the required => you get built-in Validation, 
// simple form validation(checks when users use incorrect or no data)

//callback , asynchronous code
FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstname = FORM.firstName.value;
    const lastname = FORM.lastName.value;
    const houseMembers = parseInt( FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstname, lastname, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
})


//Q: What are some questions do you have on modules?
//R: Can I have multiple render.js modules exported to my main.js
//  > Exporting and importing modules reminds me of header files.