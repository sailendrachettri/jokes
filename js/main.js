const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c78fb667a3msh7d7e2fb02212684p19c0a3jsn6c1847f46e85',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};



function changeJokes() {

	fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
		.then(response => response.json())
		.then((response) => {
			// console.log(response);

			jokesInfo.innerHTML = response[0].joke;



		})
		.catch(err => console.error(err));

}

changeJokes();

setInterval(changeJokes, 15000);

// _________________________________FOOTER STARTED_________________________________
let date = new Date();
let year = date.getFullYear();
footerYear.innerHTML = year;
// _________________________________FOOTER ENDED_________________________________