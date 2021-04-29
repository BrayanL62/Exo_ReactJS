
class App extends React.Component {

    state = {
        // 1. On crée un état, dont on sait qu'on veut que ça change avec le temps
        // avec une valeur au départ
        age: ""
    }

    // 3. On crée la fonction qui se lance au onChange
    changeAge = (event) => {

        // L'élément sur lequel il y a eu interaction de changement
        // Hors ici, il s'agit du champ de texte ageInput
        console.log(event.target)

        // 4. La valeur de age sera dorénavant égal à ce qu'il y avait précédemment + 
        // La nouvelle action de l'utilisateur
        // Si l'utilisateur appuie sur suppr: event.target.value y a une lettre en moins

        // Si l'utilisateur ajoute une lettre: event.target.value va être égal à ce qu'il y  
        // avait avant avec cette lettre en plus
        this.setState({
            age: event.target.value
        })
    }

    // hello = () => {
        // console.log(this.state.title);

        // VERY VERY BAD PRATICE. NE MARCHE PAS SVP.
        //this.state.title = "Mon titre qui déglingue tout";

        // Bieeeennnnnnnn
        // this.setState({
        //     title: "Mon titre qui déglingue tout"
        // })

        // this.state.title = this.state.title + "Et ta grand-mère!";
        // Fonctionnement Synchrone, hors le mieux ce serait d'exploiter
        // le principe asynchrone de setState
        // this.setState({
        //     title: this.state.title + "Et ta grand-mère!"
        // })

        // Objet qui soit le retour d'une fonction, avec pour paramètre 
        // le state avant l'exécution de la fonction
    //     this.setState(function(prevState) {
    //         return {
    //             title: prevState.title + "Et ta grand-mère!"
    //         }
    //     })
    // }

    // hoverboard() {
    //     console.log("IL A UN HOVERBOARDDDDDDDD...MCFLY!");
    // }

    // hiBudgie = () => {
    //     console.log("coucou petite perruche!");
    //     console.log(this.state.age);
    // }

    // incrementCounter = () => {
    //     console.log(this.state.counter);

    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    render() {

        return (
            <section>
                {/* <h1 onClick={this.hello} onMouseOver={this.hoverboard}>{this.state.title}</h1>
                
                <a href="https://www.google.fr">On souffre</a>

                <h2 className="bidule"><span onClick={this.hello}>J'ai</span> {this.state.age} ans</h2>
                
                <button onClick={this.incrementCounter}>Cliquez-moi: {this.state.counter}</button>

                <button onClick={this.hiBudgie}>Mon vieil élan</button> */}

            <h1 className="maintitle">J'ai {this.state.age} ans</h1>
                

                <form className="form">
                    <label htmlFor="ageInput">Ton âge:</label>

                    {/* 
                    2. Ici, on vient modifier mon état âge grâce à un champ de texte
                        Dès qu'on appuie sur une touche, onChange se lance
                        La valeur du champ de texte est relié à l'état âge
                    */}
                    <input type="text" id="ageInput" 
                        onChange={this.changeAge} 
                        value={this.state.age} />
                </form>
            </section>

        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'));