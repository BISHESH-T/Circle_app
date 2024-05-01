// This is the code I implemented to display the LIve Crypto Prices

var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

//Here, i have used the API provided by coingecko.com to display the live values
var liveprice = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin&vs_currencies=usd",
  
    "method": "GET",
    "headers": {}
  
  }

  $.ajax(liveprice).done(function(response){
  btc.innerHTML = response.bitcoin.usd;
  ltc.innerHTML = response.litecoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
  
  
  });