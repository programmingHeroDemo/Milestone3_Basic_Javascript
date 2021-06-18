function KilometerToMeter(kilo){
    let distance = kilo*1000;
    return distance;
}
let output = KilometerToMeter(17);


function budgetCalculator(watch, mobile,leptop){
    let watchPrize  = 50*watch;
    let mobilePrize = 100*mobile;
    let leptopPrize = 500*leptop;
    totalPrize = watchPrize + mobilePrize + leptopPrize;
    return totalPrize;
 }
 let total = budgetCalculator(5,3,1);



function hotelCost(day){
    let totalCost = 0;
   if(day<=10)
    {
       totalCost = day*100;
    } 
    else if ( day<= 20)
    {
      let firstSessionCost = 10*100 ;
      let remaining = day - 10 ;
      let secondSessionCost = remaining * 80 ;
      totalCost = firstSessionCost + secondSessionCost;

    }
  else
    {

      let firstPartCost =  10*100;
      let secondPartCost = 10*80 ; 
      let remaining = day - 20;
      let thirdPartCost = remaining*50;
      totalCost = firstPartCost+secondPartCost+thirdPartCost;

    }
  return totalCost;
}

let sum = hotelCost(27);



function megaFriend(friends){
    let maxNameLength = friends[0].length;
    let maxNameIndex = 0;
    for(i=0; i<friends.length; i++){
        let nameLength = friends[i].length;
        if (nameLength > maxNameLength) {  // >= hole lest value show korbe.
            maxNameLength = nameLength;
            maxNameIndex = i;
        }
    } 
    return friends[maxNameIndex];
}

var output = megaFriend(['Sobuj','Salman','Methun']);
