
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

export{determineHouseSizePoints, determineHouseholdPoints};