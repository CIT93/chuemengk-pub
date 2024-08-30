
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

let carbonFootPrintPoints = 0;
//const householdSize;

//global scope space 

determineHouseholdPoints("Small");
determineHouseholdPoints("Large");