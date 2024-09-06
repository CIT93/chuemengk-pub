
function determineHouseholdPoints(householdSize) 
{
if(householdSize === "Large")
    {
        carbonFootPrintPoints = carbonFootPrintPoints + 10;
    }
    else if(householdSize === "Medium")
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 7;
        }
        else if(householdSize === "Small")
            {
                carbonFootPrintPoints = carbonFootPrintPoints + 4;
            }
            else if(householdSize === "Apartment")
                {
                    carbonFootPrintPoints = carbonFootPrintPoints + 2;
                }
                            console.log(`Based on the size of the household which is ${householdSize} the carbon footprint would be ${carbonFootPrintPoints}.`);

                        }


function determineHouseholdPoints(numberInHousehold) {
    if(numberInHousehold === 1)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 14;
        }
    else if(numberInHousehold === 2)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 12;
        }
        else if(numberInHousehold === 3)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 10;
        }
        else if(numberInHousehold === 4)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 8;
        }
        else if(numberInHousehold === 5)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 6;
        }
        else if(numberInHousehold === 6)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 4;
        }
        else if(numberInHousehold > 6)
        {
            carbonFootPrintPoints = carbonFootPrintPoints + 2;
        }
        console.log(`Based on the number of the household which is ${numberInHousehold} the carbon footprint would be ${carbonFootPrintPoints}.`);
                        
        }
let carbonFootPrintPoints = 0;
//const householdSize;

//global scope space 

determineHouseholdPoints(3);
determineHouseholdPoints("Large");