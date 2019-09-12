const BASE_URL = 'https://hn.algolia.com/api/v1/';

function doSearch(query) {
    const url = BASE_URL + 'search?query=' + query + '&hitsPerPage=200';
    return fetch(url)
        .then(response => response.json())
        .then(result => result.hits);
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Search Hacker News with React</h1>
                <form type='submit' onSubmit={() => 'a'}>
                    <input type='text' onChange={() => 'a'}></input>
                    <button type='text'>Search</button>
                    {/* show the list of items */}
                </form>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app'),
    // () => console.log('Renderized App component')
);