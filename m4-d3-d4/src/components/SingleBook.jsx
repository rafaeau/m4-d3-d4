import { Card, Col } from 'react-bootstrap'
import React from 'react'
import CommentArea from './CommentArea'

class SingleBook extends React.Component {
    state = {selected:false}
    render() {
        return (
            <Col sm={6} md={4} lg={3}>
                <Card
                onClick = {() => this.setState({selected: !this.state.selected})}
                style = {{border: this.state.selected ? "1px solid green" : "none"}}
                key = { this.props.book.asin }
                className = "my-3 mx-3">
                    <Card.Img variant="top" src={this.props.book.img}/>
                    <Card.Body>
                        <Card.Title id='book-title'><small>{this.props.book.title}</small></Card.Title>
                        {
                            this.state.selected && <CommentArea asin={this.props.book.asin}/>
                        }
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook