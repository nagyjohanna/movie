const api_url_upcoming =
"https://api.themoviedb.org/3/movie/upcoming?api_key=5fc5e9ece186b0f1285921a877b5dde8&language=en-US&page=1";

async function getapi(url) {
	const response = await fetch(url);
	var data_upcoming = await response.json();
	// console.log(data_upcoming);
	if (response) {
		hideloader();
	}

	show(data_upcoming);

}

getapi(api_url_upcoming);

function hideloader() {
}

function show(data_upcoming) {
	let upcoming='';

	for (let r of data_upcoming.results) {
	 upcoming += `
		<div onclick="getMovie(${r.id});" class="movieee"><div class="img"><img loading="lazy" class="lazyload" src="http://image.tmdb.org/t/p/w185/${r.poster_path}"></div>
		<div class="tilte">${r.original_title} </div></div>`;
}

	document.getElementById("upcoming").innerHTML = upcoming;
}


function getMovie(id){

	var link = "https://api.themoviedb.org/3/movie/" + id + "?api_key=5fc5e9ece186b0f1285921a877b5dde8";
	const api_url2 = link;

	async function getapi(url) {
		const response2 = await fetch(url);
		var data2 = await response2.json();

		if (response2) {
			hideloader();
		}

		show(data2);

	}

	getapi(api_url2);

	function hideloader() {
	}

	function show(data2) {

		let tab2='';
		let tab3='';
		let tab4='';
  	let empty = '';


		tab2 = `<div class="movie_detailed_box">
		<div class="img"><img src="http://image.tmdb.org/t/p/w185/${data2.poster_path}"></div>
		<div class="movie_title">${data2.title}</div>
		<div class="movie_tagline">${data2.tagline}</div>
		<div class="movie_releasedate"><i class="fal fa-history"></i> ${data2.runtime} mins | <i class="far fa-question-circle"></i> ${data2.status} | <i class="fal fa-calendar"></i> ${data2.release_date}</div>
		<div class="movie_overview">${data2.overview}</div>
		<div class="movie_releasedate"><b>Vote avarage:</b> ${data2.vote_average} <i class="fas fa-star"></i> (${data2.vote_count}) | <b>Popularity:</b>  ${data2.popularity} | <b>Original language:</b> ${data2.original_language}</div>
			<div class="movie_link"><a href="${data2.homepage}">Movie home page</a></div>
		</div>`;


		tab3 += `<div class="genres">`;
		for (let r of data2.genres) {
			tab3 += r.name + ` | `;
		}
		tab3 += `</div>`;


		document.getElementById("movie_data").innerHTML = tab2 + tab3 + tab4;
		document.getElementById("upcoming").innerHTML = empty;
		document.getElementById("upcoming_title").innerHTML = empty;

	}

}
