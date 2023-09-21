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
    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define('list-container', listContainer);