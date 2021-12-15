import { Container, Row, Col, Card } from 'react-bootstrap'
import books from '../data/history.json'

const SingleBook = (props) => {
    return (
        <Container>
            <Row className="justify-content-around">
                {
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card key={books[props.index].asin} className="my-3 mx-3">
                            <Card.Img className="img-fluid w-100" variant="top" src={books[props.index].img} />
                            <Card.Body>
                                <Card.Title id='book-title'><small>{books[props.index].title}</small></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </Container>
    )
}

export default SingleBook