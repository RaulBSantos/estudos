const BASE_URL = 'https://hn.algolia.com/api/v1/';
function doSearch(query) {
    const url = BASE_URL + 'search?query=' + query + '&hitsPerPage=200'
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return result.hits;
        });
};
function addButtonEvent() {
    document.getElementById('searchButton')
        .addEventListener('click', onSearch);
    // (4) remove old list if there is already a list
};
function onSearch() {
    doSearch(getValueFromElementById('searchInput'))
        .then(appendList);
};
function appendList(list) {
    let listNode = document.createElement('div');
    listNode.setAttribute('id', 'list');
    document.getElementById('app').appendChild(listNode);
    list.forEach(item => {
        let itemNode = document.createElement('div');
        itemNode.appendChild(document.createTextNode(item.title));
        listNode.appendChild(itemNode);
    });
};
function getValueFromElementById(id) {
    return document.getElementById(id).value;
}
addButtonEvent();