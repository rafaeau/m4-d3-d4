import SingleBook from "./SingleBook";
import { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import books from "../data/history.json";

class BookList extends Component {
    state = {search: ""}
    render() {
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter book name"
                                onChange={(e) => {
                                    this.setState({
                                        search: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Container>

                <Container>
                    <Row className="justify-content-around">
                        {
                            books.filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
                            .map((book) => (
                                <SingleBook book={book} key={book.asin}/>
                            ))
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default BookList;
