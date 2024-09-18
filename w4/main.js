

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
        else if(numberInHousehold > 6)
        {
            householdPoints = 2;
        }
        return householdPoints;              
    }
const cfpData = [];
function start(householdNumbers, houseSize)
{
    const householdPoints = determineHouseholdPoints(householdNumbers);
    const houseSizePoints = determineHouseSizePoints(houseSize);
    const total = householdPoints + houseSizePoints;
    cfpData.push([householdNumbers, houseSize, householdPoints, houseSizePoints, total]);
}

function displayOutput()
{
    for(arr of cfpData)
        {
            console.log(arr);
            const output = document.getElementById("output");
            const newP = document.createElement("p");
            /*const newP2 = document.createElement("p");
            const newP3 = document.createElement("p");
            const newP4 = document.createElement("p");
            const newP5 = document.createElement("p");*/
            newP.textContent = `Carbon Footprint Total is ${arr[4]}`;
            /*newP2.textContent = `Number of Household Members is ${cfpData[0]}`;
            newP3.textContent = `Score for house members is ${cfpData[2]}`;
            newP4.textContent = `Size of the House is ${cfpData[1]}`;
            newP5.textContent = `Score for the size of the house is ${cfpData[3]}`;*/
            output.appendChild(newP);
            /*output.appendChild(newP2);
            output.appendChild(newP3);
            output.appendChild(newP4);
            output.appendChild(newP5);*/
            break;
        }
        
}

start(3, "Large");
start(6, "Small");
start(2, "Medium");
start(10, "Apartment");
start(4, "Apartment");
start(1, "Small");


displayOutput();