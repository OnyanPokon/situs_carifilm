class listItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set film(film){
        this._film = film;
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML = `
        <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    .card {
        width: 124px;
        margin-bottom: 18px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .poster {
        max-width: 100%; 
        max-height: 100%; 
        object-fit: cover;
    }

    .film-info {
        display: flex;
        flex-direction: column; 
        color: white;
        align-items: flex-start;


    }

    .film-info > h2 {
        font-weight: lighter;
        font-size: 1rem;
    }

    .film-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
        padding-inline: .5rem;
        padding-block: .25rem;
        background-color: #00ADB5;
        border-radius: 12px;
    }
    </style>

        <div class="card" >
            <img class="poster" src="${this._film.Poster}" alt="">
            <div class="film-info">
                <h2>${this._film.Title}</h2>
                <p>${this._film.Year}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('list-item' , listItem)