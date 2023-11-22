//Use the rest countries' API URL->http://restcountries.com/v3.1/all and display all the country flags in the console.

var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload  = function(){
    var result=JSON.parse(request.response);
    for(var i=0;i<=result.length;i++){
       var countryFlag  =  result[i].flag;
       console.log(countryFlag);
   }
  //console.log(result);
}