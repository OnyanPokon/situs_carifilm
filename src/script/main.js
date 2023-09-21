import Data from '../data/data.js';
import '../component/list-container.js';
import '../component/list-item.js'
import '../component/serach.js';


const main = () =>{
    const searchBar = document.querySelector('search-bar');
    const listContainer = document.querySelector('list-container');

    const renderResult = result => {
        listContainer.films = result
    }

    const renderError = message => {
        listContainer.renderError(message);
    }
    const onButtonSearchClicked = () =>{
        Data.searchFilm(searchBar.value).then(renderResult).catch(renderError);
    }

    searchBar.clickEvent = onButtonSearchClicked;
}

export default main;


