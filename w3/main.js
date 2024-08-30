
function determineHouseholdPoints(numberInHousehold) 
{
console.log("Inside the function");
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
                            console.log(`Based on the number of members of the household of ${numberInHousehold} the carbon footprint would be ${carbonFootPrintPoints}.`);

                        }

let carbonFootPrintPoints = 0;
//const numberInHousehold = 3;

//global scope space 

determineHouseholdPoints(3);
determineHouseholdPoints(4);