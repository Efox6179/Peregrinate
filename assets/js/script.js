var exchangeRateContainerEl = (".exchange-rate-container");

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

$(".drop-menu").on("click","a",function() {
   var currency = $(this).attr("currency-code");
   getExchangeRate(currency); 
   var flagCode = $(this).attr("flag-code");
   getFlag(flagCode/*, country name for the alt attribute*/);
});

function getFlag(flagCode) {
   $(".flag-img").attr("src",`https://flagcdn.com/${flagCode}.svg`);
   //$(".flag-img").attr("alt",countryName);
}


