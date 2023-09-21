class searchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render()
    }   

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector('#search-input').value;
    }
    render(){
        this.shadowDOM.innerHTML=`
        <style>
        .full{
           background-color: #393E46; 
        }
        .input{
            padding: 1rem;
            border-radius: 1rem;
            color: #393E46;
            flex-grow: 1;
            border:none;
        }
        .label{
            font-size: 1rem;
            font-weight:bold;
        }
        .button{
            padding: 1rem;
            background-color: #00ADB5;
            color: white;
            border-radius: 1rem;
            border:none;
            font-size: 1rem;
            font-weight: bold;
        }
        .input:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
        }
        div.search-container{
            color: white;
            max-width: 1024px;
            margin-inline: auto;
            display: flex;
            gap: 1rem;
            align-items: center;
            padding-inline: 1rem;
            padding-block: 3rem;
        }
        form{
            display:flex;
            gap: 0.5rem;
            align-items: center;
            flex-grow: 1;
        }
        @media (min-width: 640px) {
            div.search-container {
                max-width: 640px;
            }
        }
        @media (min-width: 768px) {
            div.search-container {
                max-width: 768px;
            }
        }

        </style>
        <div class="full">
            <div class="search-container">
                <form action="" id="search" class="form">
                    <input type="text" name="search-bar" id="search-input" placeholder="Masukan Judul" class="input">
                    <button name="search-button" type="button" id="search-button" class="button">Cari</button>
                </form>
            </div> 
        </div>
        
        `;

        this.shadowDOM.querySelector('#search-button').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', searchBar);