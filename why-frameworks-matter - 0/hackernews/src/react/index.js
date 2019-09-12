const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
    const URL = BASE_URL + 'search?query=' + query + '&hitsPerPage=200';
    return fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return result.hits;
        });
}