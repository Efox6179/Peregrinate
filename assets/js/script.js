const dropdowns = document.querySelectorAll('.dropdown:not(.is-hoverable)');

if (dropdowns.length > 0) {
  dropdowns.forEach(function(el) {
    el.addEventListener('click', function(e) {
    closeDropdowns();
      e.stopPropagation();
      el.classList.toggle('is-active');
    });
  });

  document.addEventListener('click', function(e) {
    closeDropdowns();
  });
}

function closeDropdowns() {
  dropdowns.forEach(function(el) {
    el.classList.remove('is-active');
  });
}

// Close dropdowns if ESC pressed
document.addEventListener('keydown', function (event) {
  let e = event || window.event;
  if (e.key === 'Esc' || e.key === 'Escape') {
    closeDropdowns();
  }
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
    // Code to display rate to user
};

var handleError = function() {
    // Do something to handle the error without using prompts/alerts
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

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});


