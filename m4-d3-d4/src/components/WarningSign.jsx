import { Alert, Container, Row, Col } from 'react-bootstrap'

const WarningSign = (props) => {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col lg={6}>
          <Alert className="text-center" variant="danger">
            {props.text}
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default WarningSign