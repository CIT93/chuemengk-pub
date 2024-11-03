import { renderTbl } from "./render.js";
import {determineHouseSizePoints,determineHouseholdPoints} from "./cfp.js";

const FORM = document.getElementById("form"); 
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstname = FORM.firstName.value;
    const lastname = FORM.lastName.value;
    const houseMembers = parseInt( FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstname, lastname, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    renderTbl(cfpData);
    FORM.reset();
})