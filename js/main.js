function bookSearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ''
	console.log(search)

	$.ajax({
		url: 'https://www.googleapis.com/books/v1/volumes?q=' + search,
		dataType: 'json',

		success: function(data) {
			for(i = 0; i < data.items.length; i++){
				results.innerHTML += '<h1>' + data.items[i].volumeInfo.authors + '</h1>'
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '</h2>'
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.publishedDate + '</h2>'
				results.innerHTML += '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '">' + "<hr>"


			}
		},
		type: 'GET'
	})
}

document.getElementById('button').addEventListener('click', bookSearch, false)


