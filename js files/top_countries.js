// Given a json of gold,silver and bronze medal list of countries find top 3 countries.
function addCountry(arr,country){
	arr.push({
		"name": country.name,
		"medals": country.medals
	});
}
function minRank(country1,country2){
	// say country has less medals
	var minRankCountry = {
		"name": country2.name,
		"medals": country2.medals
	}
	if(country1.medals.gold<minRankCountry.medals.gold){
			minRankCountry.name = country1.name;
			minRankCountry.medals = country1.medals;			
		}else if(country1.medals.gold==minRankCountry.medals.gold){
				if(country1.medals.silver<minRankCountry.medals.silver){
					minRankCountry.name = country1.name;
					minRankCountry.medals = country1.medals;			
			}else if(country1.medals.silver==minRankCountry.medals.silver){
				if(country1.medals.bronze<minRankCountry.medals.bronze){
					minRankCountry.name = country1.name;
					minRankCountry.medals = country1.medals;			
				} 
			}
		}
		return minRankCountry;
}
function updateCountriesList(countries,newCountry){
	var minRankCountry={
		"name": countries[0].name,
		"medals":{
			"gold":countries[0].medals.gold,
			"silver":countries[0].medals.silver,
			"bronze":countries[0].medals.bronze 
		}
	};
	var index = 0;
	for(var i=1; i < countries.length;i++){
		var cntr = minRank(countries[i],minRankCountry);
		if(cntr.name !== minRankCountry.name){
			index = i;
			minRankCountry = minRank(countries[i],minRankCountry);	
		}
	}
	if(minRank(newCountry,minRankCountry).name === minRankCountry.name){
		countries.splice(index,1);
		addCountry(countries, newCountry)
	}
}
function top_3_Countries(arr){
		var i, topCountries = [];
	 for(i=0;i<arr.length;i++){ 
 			if(topCountries.length<3){ 
	 			addCountry(topCountries, arr[i]);
	 			// console.log(topCountries);
 			}
 			else{
 				var flag = 0;
 				updateCountriesList(topCountries,arr[i]);
 			}

	 		 
	 }
	 console.log(topCountries)	
}
arr = [
		{"name":"India",medals:{"gold":7,"silver":10,"bronze":6}},
		{"name":"Aus",medals:{"gold":5,"silver":3,"bronze":6}},
		{"name":"SA",medals:{"gold":5,"silver":6,"bronze":6}},
		{"name":"Japan",medals:{"gold":5,"silver":10,"bronze":9}},
		{"name":"USA",medals:{"gold":6,"silver":10,"bronze":4}},
		{"name":"China",medals:{"gold":5,"silver":14,"bronze":7}}
	];

top_3_Countries(arr);
