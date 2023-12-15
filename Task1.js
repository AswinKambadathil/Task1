let url = "https://json.onnetsystems.dev/bins?id=k99tKipKD";
fetch(url)
  .then((data) => data.json())
  .then((data) => {
    let jsonData = data;

    // const couponUsed = jsonData.coupon.find((discount) => coupon.couponName == couponNameUsed)
    // const couponDiscount = couponUsed ? couponUsed.discount : 0;

    addSquares("Tier 1", "box1", "A", "price1", "tier1num");
    addSquares("Tier 2", "box2", "B", "price2", "tier2num");
    addSquares("Tier 3", "box3", "C", "price3", "tier3num");

    function addSquares(tierName, cls, numb, priceId, tierNumId) {
      var container = document.querySelector('.blue');
      const tierObject = jsonData.seats.find((seats) => seats.name === tierName);
      const numberOfSeats = tierObject ? tierObject.seats : 0;
      const tierPrice = tierObject ? tierObject.price : 0;

      for (var i = 0; i < numberOfSeats; i++) {
        let square = document.createElement('div');
        square.className = cls;
        square.innerText = `${numb} ${i + 1}`;
        square.dataset.price = tierPrice;
        container.appendChild(square);
        square.addEventListener('click', () => changeColor(square, tierNumId,cls));
      }

      document.getElementById(priceId).innerText = `${tierPrice}`;
    }

    function changeColor(square, tierNumId,cls) {
      if (square.style.backgroundColor === 'green') {
        square.style.backgroundColor = '';
      } else {
        square.style.backgroundColor = 'green';
      }

      updateTotalPrice();
      updateTierSeatCount(tierNumId,cls);
    }

    function updateTierSeatCount(tierNumId) {
      const greenSquares = document.querySelectorAll(`[style="background-color: green;"]`);
      let box1Count = 0, box2count = 0 , box3count = 0 
      greenSquares.forEach(element => {
        if (element.classList.contains('box1')) {
          box1Count++;
          document.getElementById(tierNumId).innerText = box1Count;
        } else if (element.classList.contains('box2')) {
          box2count++;
          document.getElementById(tierNumId).innerText = box2count;
        } else if (element.classList.contains('box3')) {
          box3count++;
          document.getElementById(tierNumId).innerText = box3count;
        }
      });
      
      
      console.log(greenSquares,greenSquares.length);
    }

    function updateTotalPrice() {
      var totalPrice = 0;
      var greenSquares = document.querySelectorAll('.blue div[style="background-color: green;"]');

      greenSquares.forEach(function (square) {
        const tierPrice = parseInt(square.dataset.price);
        totalPrice += tierPrice;
      });

      document.getElementById('totalPrice').innerText = `${totalPrice}`;
    }
  })
  .catch((error) => console.log(error));