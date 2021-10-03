var num = Math.floor(Math.random() * 20);
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
    "x-rapidapi-key": "e38ebf711cmsha3723cee160c9a2p118011jsne7f0cbe31183",
  },
})
  .then((response) => response.json())
  .then((response) => {
    document.getElementById("item1").innerHTML =
      response.countries_stat[num].country_name;

    document.getElementById("item2").innerHTML =
      response.countries_stat[num].deaths;

    document.getElementById("item3").innerHTML =
      response.countries_stat[num].total_recovered;

    document.getElementById("item4").innerHTML =
      response.countries_stat[num].total_recovered;
    document.getElementById("item5").innerHTML =
      response.countries_stat[num].new_deaths;

    document.getElementById("item6").innerHTML =
      response.countries_stat[num].new_cases;

    document.getElementById("item7").innerHTML =
      response.countries_stat[num].serious_critical;

    document.getElementById("item8").innerHTML =
      response.countries_stat[num].active_cases;

    document.getElementById("item9").innerHTML =
      response.countries_stat[num].total_cases_per_1m_population;
  });

//   .then((response) => {
//     document.getElementById("joke2").innerHTML =
//       response.countries_stat[num].deaths;
//   });

//   fetch("https://covid-19-statistics.p.rapidapi.com/regions", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
// 		"x-rapidapi-key": "e38ebf711cmsha3723cee160c9a2p118011jsne7f0cbe31183"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
