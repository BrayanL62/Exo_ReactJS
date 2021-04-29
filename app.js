class App extends React.Component {
    state = {
        name: "",
        text: "",
        history: []
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    comment = (event) => {
        event.preventDefault();

        let newComment = [...this.state.history, this.state.name, this.state.text]

        this.setState({
            history: newComment
        })
    }

    render() {
        return (
            <section>
            <p>Say Something</p>
            <form method="post">

                <input type="text" placeholder="Your Name"
                onChange={this.changeName}
                value={this.state.name} />

                <textarea className="text" placeholder="Your comment"
                onChange={this.changeText}
                value={this.state.text}
                ></textarea>

                <input onClick={this.comment} 
                className="btn" type="submit" value="Comment >"/>

            </form>
            </section>
        )
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));