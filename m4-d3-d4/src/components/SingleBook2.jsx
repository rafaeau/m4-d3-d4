import { Col, Card } from 'react-bootstrap'

const SingleBook2 = ({ book }) => {
    return (

        <Col xs={12} sm={6} md={4} lg={3}>
            <Card key={book.asin} className="my-3 mx-3">
                <Card.Img className="img-fluid w-100" variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title id='book-title'><small>{book.title}</small></Card.Title>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default SingleBook2