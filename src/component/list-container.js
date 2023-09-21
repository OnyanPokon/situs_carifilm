import './list-item.js';

class listContainer extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set films(films){
        this._films = films;
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML = `
        `;
        this._films.forEach(film => {
            const itemEl = document.createElement('list-item');
            itemEl.film = film;
            this.shadowDOM.appendChild(itemEl);
        }); 
    }

}

customElements.define('list-container', listContainer);