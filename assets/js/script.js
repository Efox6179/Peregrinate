

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


