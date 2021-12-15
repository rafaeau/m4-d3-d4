import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <>
      <WarningSign text="This is an alert with props!"/>
      <MyBadge text="This is a badge!" color="danger"/>
    </>
  );
}

export default App;
