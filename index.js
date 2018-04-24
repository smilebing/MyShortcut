function search(){
	var searchContent=$('#searchInput').val();
	console.log(searchContent);
}

function clearInput(){
	$('#searchInput').val('');
}

function searchInputChange(){
	search();
}