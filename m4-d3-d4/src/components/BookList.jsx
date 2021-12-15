import SingleBook2 from "./SingleBook2"
import { Container, Row } from 'react-bootstrap'
import books from '../data/history.json'

const BookList = (props) => {
    return (
        <Container>
            <Row className="justify-content-around">
                {
                    books.map(book => (
                        <SingleBook2 book={book}/>
                    ))
                }
            </Row>
        </Container>
    )
}

export default BookList