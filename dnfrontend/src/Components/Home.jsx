import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import Notes from './Notes';
import './Notes.css';

function Home() {
    let navigateTo = useNavigate();
    const [ ready, setReady] = useState(false);
    useEffect(() => {
      if(!localStorage.getItem("auth-token"))
        navigateTo('/login');
    },[]);

  return (
    <>
      <div className='bg-cover bg-[#1F2232] bg-dot-pattern bg-centern min-h-screen'>
        <div className=' backdrop-blur-[2px] h-[vh]'>
          <Navbar/>
          {localStorage.getItem("auth-token") &&
          <Notes />}
        </div>
      </div>
    </>
  )
}

export default Home
