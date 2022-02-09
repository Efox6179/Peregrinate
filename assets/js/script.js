<<<<<<< HEAD
var exchangeRateContainerEl = (".exchange-rate-container");
=======
var flagCodesObject;
>>>>>>> 8db4221b5e2a3c34ac5fe76591fbc22e393e7b5f

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

var getExchangeRate = function(currency) {
    var apiUrl = "https://v6.exchangerate-api.com/v6/5b54235bc02a7caa763ae076/pair/USD/" + currency;

    fetch (apiUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    returnRate(data);
                });
            } else {
                handleError();
            }
        })
        .catch(function(error) {
            handleError();
        });
};

var returnRate = function(data) {
    // Clear old content
    exchangeRateContainerEl.textContent = "";

    var conversionRate = data.conversion_rate;
    var rateEl = document.createElement("p");
    rateEl.textContent = "Conversion Rate: " + conversionRate;

    exchangeRateContainerEl.appendChild(rateEl);
};

var handleError = function() {
    // Clear old content
    exchangeRateContainerEl.textContent = "";
    var errorEl = document.createElement("p");
    errorEl.textContent = "Error accessing exchange rate API, please try your request again later.";

    exchangeRateContainerEl.appendChild(errorEl);
};

<<<<<<< HEAD
$(".drop-menu").on("click","a",function() {
   var currency = $(this).attr("currency-code");
   getExchangeRate(currency); 
   var flagCode = $(this).attr("flag-code");
   getFlag(flagCode/*, country name for the alt attribute*/);
=======
$(".dropdown-item").on("click",function() {
   var currency = $(this).attr("data-currency-code");
   //var exchangeRate = getExchangeRate(currency); 
   $(".exchange-rate-display").text("1 USD = " + getExchangeRate(currency));
   var flagCode = $(this).attr("data-flag-code");
   var countryName = $(this).text().trim();
   console.log(currency);
   console.log(flagCode);
   console.log(countryName);
   getFlag(flagCode, countryName);
>>>>>>> 8db4221b5e2a3c34ac5fe76591fbc22e393e7b5f
});

function getFlag(flagCode, countryName) {
   $(".flag-img").attr("src",`https://flagcdn.com/${flagCode}.svg`);
   $(".flag-img").attr("alt",countryName + "'s flag");
}


