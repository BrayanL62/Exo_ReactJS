class App extends React.Component {
    state = {
        name: "",
        text: "",
        comment: [],
        commentHistory: []
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
    

    keepComment = (event) => {
        event.preventDefault();
        this.setState({
            comment: [
                {name: this.state.name, text: this.state.text}
            ]
        })

        let newComment = [...this.state.commentHistory, this.state.comment]

        this.setState({
            commentHistory: newComment
        })
    }

    render() {
        return (
            <section>
            <p>Say Something</p>
            <form method="post">

                <input type="text" placeholder="Your Name"
                onChange={this.changeName}
                value={this.state.comment.name} />

                <textarea className="text" placeholder="Your comment"
                onChange={this.changeText}
                value={this.state.comment.text}
                ></textarea>

                <input onClick={this.keepComment} 
                className="btn" type="submit" value="Comment >"/>

            </form>
            </section>
        )
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));