import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout' //When a module has a default export, you import it without curly braces
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
    </>
  );
}

export default App;
