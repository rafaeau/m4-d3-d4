import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import books from './data/history.json'

function App() {
  return (
    <>
      <WarningSign text="This is an alert with props!"/>
      <MyBadge text="This is a badge!" color="info"/>
      <Container>
        <Row className="justify-content-around">
          <SingleBook book={books[2]}/>
        </Row>
      </Container>
      <BookList book={books}/>
    </>
  );
}

export default App;
