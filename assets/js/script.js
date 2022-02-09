var flagCodesObject;

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

var getExchangeRate = function(country) {
    var apiUrl = "https://v6.exchangerate-api.com/v6/5b54235bc02a7caa763ae076/pair/USD/" + country;

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
    var conversionRate = data.conversion_rate;

    // Code to either return value, or create element in HTML
};

var handleError = function() {
    // Code to pass error message back or generate element
};

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
});

function getFlag(flagCode, countryName) {
   $(".flag-img").attr("src",`https://flagcdn.com/${flagCode}.svg`);
   $(".flag-img").attr("alt",countryName + "'s flag");
}


