<<<<<<< HEAD
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
    // Code to display rate to user
};

var handleError = function() {
    // Do something to handle the error without using prompts/alerts
};
=======
$(".drop-menu").on("click","a",function() {
   var currency = $(this).attr("currency-code");
   getExchangeRate(currency); 
   var flagCode = $(this).attr("flag-code");
   getFlag(flagCode);
});
>>>>>>> main
