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