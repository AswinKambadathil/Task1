const jsonData={
    "coupon":
        [{"discount":"10%","couponName":"MAX10"},   
        {"discount":"20%","couponName":"SUPER10"}],
    "seats":
        [{"name":"Tier 1","seats":30,"price":200},
        {"name":"Tier 2","seats":20,"price":400},
        {"name":"Tier 3","seats":10,"price":700}]}

const tier1Object=jsonData.seats.find(seats=> seats.name==="Tier 1");
const numberOfSeatsInTier1 = tier1Object ? tier1Object.seats : null;

document.addEventListener('DOMContentLoaded', function() {
    addSquares(numberOfSeatsInTier1);
});


function addSquares(numberOfSeatsInTier1) {
    var container = document.querySelector('.box1');

    for (var i = 0; i < numberOfSeatsInTier1; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
}
// const tier1Object=jsonData.seats.find(seats=> seats.name==="Tier 2");
// const numberOfSeatsInTier2 = tier1Object ? tier1Object.seats : null;

// document.addEventListener('DOMContentLoaded', function() {
//     addSquares(numberOfSeatsInTier2);
// });


// function addSquares(numberOfSeatsInTier2) {
//     var container = document.querySelector('.box2');

//     for (var i = 0; i < numberOfSeatsInTier2; i++) {
//         var square = document.createElement('div');
//         square.className = 'square';
//         container.appendChild(square);
//     }
// }
// const tier1Object=jsonData.seats.find(seats=> seats.name==="Tier 3");
// const numberOfSeatsInTier3 = tier1Object ? tier1Object.seats : null;

// document.addEventListener('DOMContentLoaded', function() {
//     addSquares(numberOfSeatsInTier3);
// });


// function addSquares(numberOfSeatsInTier3) {
//     var container = document.querySelector('.box3');

//     for (var i = 0; i < numberOfSeatsInTier3; i++) {
//         var square = document.createElement('div');
//         square.className = 'square';
//         container.appendChild(square);
//     }
// }
// function changeBlock() {
//     var block = document.getElementById('myBlock');
//     block.style.backgroundColor = 'lightgreen';
// }