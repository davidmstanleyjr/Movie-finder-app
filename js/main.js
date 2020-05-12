//This is for searching and submitting. The preventDefault keeps the page from refreshing

$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

//Function for searching for movies. Catch error is in case something screws up.
function getMovies(searchText) {
	axios
		.get(' http://www.omdbapi.com/?s=' + searchText + '&apikey=72455408&')
		.then((response) => {
			console.log(response);
			let movies = response.data.Search;
			let output = '';
			$.each(movies, (index, movie) => {
				output += `
                <div class="col-md-3">
                <div class="well text-center"> 
                    <img src="${movie.Poster}">             
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                </div>
                </div>
                `;
			});

			$('#movies').html(output);
		})
		.catch((err) => {
			console.log(err);
		});
}
