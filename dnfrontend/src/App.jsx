import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NoteState from './Context/NoteState';

function App() {

  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App
