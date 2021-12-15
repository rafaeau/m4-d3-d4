import SingleBook2 from "./SingleBook2"
import { Component } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import books from '../data/history.json'

class BookList extends Component {
    state = {
        search:""
    }
    render() {
        return (
            <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter book</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter book"
                        onChange={(e) => {
                            this.setState({
                                search: e.target.value
                            })
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Container>
            
            <Container>
                <Row className="justify-content-around">
                    {
                        books.map(book => (
                            <SingleBook2 book={book}/>
                        ))
                    }
                </Row>
            </Container>
            </>
        )
    }
}

export default BookList