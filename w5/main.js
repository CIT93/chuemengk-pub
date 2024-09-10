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
function start(householdNumbers, houseSize)
{
    const housePoints = determineHouseholdPoints(householdNumbers);
    const sizePoints = determineHouseSizePoints(houseSize);
    const total = housePoints + sizePoints;
    cfpData.push([householdNumbers, houseSize, housePoints, sizePoints, total]);
}

function displayOutput()
{
    for(arr of cfpData)
        {
            console.log(arr);
            const output = document.getElementById("output");
            const newH2 = document.createElement("h2");
            newH2.textContent = `Carbon Footprint Total is ${arr[4]}`;
            const newH3 = document.createElement("h3");
            newH3.textContent = `Based on number in and size of home`;
            const newP = document.createElement("p");
            newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]} )`;
            newP.textContent += `and a ${arr[1]} size of home (score: ${arr[2]} )`;
            output.appendChild(newH2);
            output.appendChild(newH3);
            output.appendChild(newP);
            
        }
        
}

start(1, "Large");
start(2, "Small");
start(3, "Medium");
start(4, "Apartment");
start(5, "Apartment");
start(6, "Small");
start(7, "Large");
start(8, "Small");
start(9, "Medium");
start(1, "Apartment");
start(2, "Apartment");
start(3, "Small");
start(4, "Large");
start(5, "Small");
start(6, "Medium");
start(7, "Apartment");
start(8, "Apartment");
start(9, "Small");

displayOutput();