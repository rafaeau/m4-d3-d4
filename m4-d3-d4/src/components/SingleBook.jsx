import { Card, Col } from 'react-bootstrap'

const SingleBook = (props) => (
    <Col sm={6} md={4} lg={3}>
        <Card key = { props.book.asin } className = "my-3 mx-3">
            <Card.Img variant="top" src={props.book.img}/>
            <Card.Body>
                <Card.Title id='book-title'><small>{props.book.title}</small></Card.Title>
            </Card.Body>
        </Card>
    </Col>
)

export default SingleBook