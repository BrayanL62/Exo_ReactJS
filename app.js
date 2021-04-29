class App extends React.Component {
    state = {
        comment: [
            {name: "", text: ""}
        ],
        commentHistory: []
    }
    
    changeText = (event) => {
        this.setState({
            comment: [{name: event.target.value, text: event.target.value}]
        })
    }

    comment = (event) => {
        event.preventDefault();

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
                onChange={this.changeText}
                value={this.state.comment.name} />

                <textarea className="text" placeholder="Your comment"
                onChange={this.changeText}
                value={this.state.comment.text}
                ></textarea>

                <input onClick={this.comment} 
                className="btn" type="submit" value="Comment >"/>

            </form>
            </section>
        )
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));