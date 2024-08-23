// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household
const membersOfHousehold = 6;
// 2. Consider the size of your house
const houseSize = 7;
// 3. Evaluate your food choices
const foodChoice = 10;
// 4. Examine your water consumption
const waterConsumption = 9;
// 5. Determine how many household purchases you make each year
const householdPurchases = 10;
// 6. Consider how much waste you produce. 
const wasteProduced = 50;
// 7. Identify the amount of waste that you recycle
const wasteRecycled = 16;
// 8. Tally up your annual transportation fees
const annualTransportationFees = 10;
// 9. Add up your points
const cfpTotal = membersOfHousehold + houseSize + foodChoice + waterConsumption + householdPurchases + wasteProduced + wasteRecycled + annualTransportationFees;
// 10. Write JS to update the rendered html (index.html) with total carbon footprint
console.log(cfpTotal);