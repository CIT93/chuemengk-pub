import { renderTbl } from "./render.js";
import {start} from "./render2.js";

const FORM = document.getElementById("form"); 
const OUTPUT = document.getElementById("output");
const cfpData = [];
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
    renderTbl(cfpData);
    FORM.reset();
})