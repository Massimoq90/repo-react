import './App.css';
import Alert from './components/alert/Alert';
import Navbar from './components/myNav/Navbar';
import MyFooter from './components/myFooter/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTheBooks from './components/allTheBooks/AllTheBooks';

function App() {
  return (
    <>
      <Navbar />
      <Alert />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
