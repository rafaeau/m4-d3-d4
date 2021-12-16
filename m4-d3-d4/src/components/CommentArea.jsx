import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class CommentArea extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzk2NjAyMjQsImV4cCI6MTY0MDg2OTgyNH0.kMQv1FRu_3dz4nGd6Svq-5gtmJxijc2IHVwiWb6Ldqk"
                }
            })
            console.log(response)
            let comments = await response.json()
            this.setState({
                comments: comments
            })
            console.log(this.state.comments)
        }

        catch(err) {console.log(err)}
    }

    render() {
        return (
                this.state.comments.map((comment) => (
                <ListGroup key={this.props.asin}>
                    <ListGroup.Item>{this.state.comments.comment}</ListGroup.Item>
                    <ListGroup.Item>{this.state.comments.rate}</ListGroup.Item>
                    <ListGroup.Item>{this.state.comments.elementId}</ListGroup.Item>
                </ListGroup>
            ))
        )
    }
}

export default CommentArea