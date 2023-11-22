// use the same rest countries and print all countries names, regions,sub-region and populations

var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload  = function(){
    var result=JSON.parse(request.response);
    for(var i=0;i<=result.length;i++){
       var countryName  =  result[i].name.common;
       var  regions =  result[i].region;
       var subRegion  =  result[i].subregion;
       var populations  =  result[i].population;
   console.log("countryname  :" + countryName);
   console.log("region :" + regions);
    console.log("subregion :" + subRegion);
    console.log("population :" +populations);
   }
  //console.log(result);
}
