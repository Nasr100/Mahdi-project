const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


let TripModalBtn = document.getElementById("TripModalBtn");
TripModalBtn.addEventListener("click",function(){
  let expenses = document.querySelector(".expense");
  let profit = document.querySelector(".profit");

  let calculateTripBtn = document.getElementById("claculateTrip");

  let mile = document.getElementById("mile");
  let fuel = document.getElementById("fuel");
  let deadhead = document.getElementById("deadhead");
  let commissRate = document.getElementById("commissionRate");
  let fuelQty = document.getElementById("fuelQty");

  let mileSum = 0;
  let tripSalary = 0;
  let fuelExpenses = 0;
  
  let valMile = valFuel = valDeadHead = valComissRate = valFuelQty =  0;
  
  // mile.addEventListener("keyup",function(event){
  //       if(event.which != 8 && isNaN(String.fromCharCode(event.which)) || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
  //       // Allow: Ctrl+A
  //     (event.keyCode == 65 && event.ctrlKey === true) ||
  //       // Allow: home, end, left, right
  //     (event.keyCode >= 35 && event.keyCode <= 39)){
  //         event.preventDefault(); 
  //       }
  //       valMile = Number( mile.value);


  //       // console.log(valMile);
  // })
 



  calculateTripBtn.addEventListener("click",function(){
    valMile = Number(mile.value)//200
    valFuel = Number(fuel.value)//4
    valDeadHead = Number(deadhead.value)//0
    valComissRate = Number(commissRate.value)//0.65
    valFuelQty = Number(fuelQty.value)//20

    fuelExpenses = valFuel * valFuelQty;//80
    tripSalary =  valMile * valComissRate;//130
    mileSum = valMile + valDeadHead ;//200

    let valprofit = tripSalary - fuelExpenses;//50

    expenses.innerHTML = fuelExpenses;
    profit.innerHTML = valprofit;
  })


  
  
})










