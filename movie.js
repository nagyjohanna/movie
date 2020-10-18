const api_url =
	"https://api.themoviedb.org/4/list/1?api_key=5fc5e9ece186b0f1285921a877b5dde8";

async function getapi(url) {
	const response = await fetch(url);
	var data = await response.json();
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

		for (let r of data.results) {
		  tab += `<div onclick="getMovie(${r.id});" class="movieee">
		<div class="img"><img src="http://image.tmdb.org/t/p/w185/${r.poster_path}"></div>
		<div class="tilte">${r.title}</div>
		</div>`;
}

	document.getElementById("filmek").innerHTML = tab;
}
