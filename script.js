/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
a) Get all the countries from Asia continent /region using Filter function*/

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function (){
    var country=JSON.parse(this.response);
    const asia=country.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
        }
    })
    console.log(asia);
}
*/

//b) Get all the countries with a population of less than 2 lakhs using Filter function

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
   const populate=countryData.filter((ele)=>{
        return ele.population<200000;
   })
   console.log(populate);}
*/

//c) Print the following details name, capital, flag, using forEach function

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
    countryData.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);
    })}
*/

//d) Print the total population of countries using reduce function

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
     return acc+element.population;
    },0)
    console.log(population);}
*/

    //e) Print the country that uses US dollars as currency
    /*
    var request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all","true");
    request.send();
    request.onload=function (){
    var countryData=JSON.parse(this.response);
        countryData.forEach((ele)=>{
            console.log(ele.currency);
        })}
        */