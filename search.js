

function searchURL(){

		link = document.getElementById('search_movie').value;
		link_search = "https://api.themoviedb.org/3/search/movie?api_key=5fc5e9ece186b0f1285921a877b5dde8&query=" + link;

	//}


	// const api_url =
	// 	"https://api.themoviedb.org/4/list/1?api_key=5fc5e9ece186b0f1285921a877b5dde8";


const api_url = link_search;


	async function getapi(url) {


		const response = await fetch(url);


		var data = await response.json();
		console.log(data);
		if (response) {
			hideloader();
		}
		show(data);
	}

	getapi(api_url);


	function hideloader() {
	}


	function show(data) {

	let tab='';
	let empty='';



	for (let r of data.results) {
	  tab += `<div onclick="getMovie(${r.id});" class="movieee">
	<div class="img"><img src="http://image.tmdb.org/t/p/w185/${r.poster_path}"></div>
	<div class="tilte">${r.title}</div>
	</div>`;
	}




		document.getElementById("filmek-results").innerHTML = tab;
		document.getElementById("button_back").innerHTML = empty;
	}



}


function getMovie(id){



		var link = "https://api.themoviedb.org/3/movie/" + id + "?api_key=5fc5e9ece186b0f1285921a877b5dde8";



const api_url2 = link;


	async function getapi(url) {


		const response2 = await fetch(url);


		var data2 = await response2.json();
		console.log(data2);
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




		document.getElementById("movie_data2").innerHTML = tab2 + tab3;
		document.getElementById("filmek-results").innerHTML = empty;


	}

}


function goBack() {
  window.history.back()
}
