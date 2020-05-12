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
		})
		.catch((err) => {
			console.log(err);
		});
}
