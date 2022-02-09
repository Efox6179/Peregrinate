
var exchangeRateDisplayEl = document.querySelector(".exchange-rate-display");
var flagCodesObject;

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
exchangeRateDisplayEl.textContent = "";
console.log(data);
var conversionRate = data.conversion_rate;
var targetCode = data.target_code
var rateEl = document.createElement("p");
rateEl.textContent = "1 USD = " + conversionRate + " " + targetCode;

exchangeRateDisplayEl.appendChild(rateEl);
};

var handleError = function() {
// Clear default text before displaying error
exchangeRateDisplayEl.textContent = ""

var errorEl = document.createElement("p");
errorEl.textContent = "Error accessing exchange rate API, please try your request again later.";

exchangeRateDisplayEl.appendChild(errorEl);
};

$(".dropdown-item").on("click",function() {
var currency = $(this).attr("data-currency-code");
//var exchangeRate = getExchangeRate(currency);
getExchangeRate(currency);
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
