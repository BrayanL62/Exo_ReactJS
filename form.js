class App extends React.Component {
    state = {
        search: "",
        history: ["trucmuche"]
    }
    
    changeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    keepHistory = (event) => {
        event.preventDefault();

        // ..., ça décompose tous les éléments du tableau un par un
        // si, montab = [1,2]
        // donc, let qqchose = [...montab, "ddd"]
        // à la fin, qqchose = [1,2,"ddd"]
        let newHistory = [...this.state.history, this.state.search]

        this.setState({
            history: newHistory
        })
    }

    render() {
        return (
            <div className="app">
                <h1 className="maintitle">Voici mon lien</h1>

                {/* <a href={"https://www.google.fr/search?q="+ this.state.search}> */}

                <a href={`https://www.google.fr/search?q=${this.state.search}`}>
                    https://www.google.fr/search?q={this.state.search}
                </a>

                <form className="form">
                    <label htmlFor="searchInput">Votre recherche: </label>

                    <input type="text" id="searchInput" 
                        onChange={this.changeSearch}
                        value={this.state.search} />

                    <input onClick={this.keepHistory}
                    type="submit" value="Garder en mémoire"/>
                </form>
            </div>
        )
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));