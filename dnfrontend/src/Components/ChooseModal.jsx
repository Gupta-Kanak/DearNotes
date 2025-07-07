import React from 'react'
import { createPortal } from 'react-dom';
import './Notes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCloudMoon} from '@fortawesome/free-solid-svg-icons';

function ChooseModal(props) {
    const handleClick = (ans) => {
        props.setStyle(ans);
        console.log(ans);
        props.setadd(true);
        props.ch(false);
    }
  return createPortal(
    <>
      <div className='fixed inset-0 h-screen w-screen backdrop-brightness-50 z-50 flex justify-center   '>
          <div className={`mx-6 my-6 border-2 border-[#A9B0C6] rounded-lg w-[75%] h-[75%] max-sm:w-[90vw] max-sm:h-[90vh] add-inv`}>
            <div className='rounded-lg backdrop-blur-[2px] h-[100%] w-[100%] text-[1.5rem] p-6'> 
              <FontAwesomeIcon icon={faCircleXmark} onClick={() => props.ch(false)} className='hover:cursor-pointer hover:scale-120 absolute top-4 right-4 text-[#f7f8fa]'/>
              <div className="flex flex-col justify-between h-[100%] w-[100%] items-center">
              <h1 className="text-[#fcf8fa] flex justify-center">--Choose Design--</h1>
              <div className="grid grid-cols-5 h-[90%] w-[90%] gap-6 max-sm:gap-3">
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c1 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c1")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c2 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c2")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c3 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c3")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c4 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c4")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c5 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c5")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c6 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c6")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c7 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c7")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c8 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c8")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c9 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c9")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c10 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c10")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c11 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c11")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c12 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c12")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c13 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c13")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c14 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c14")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c15 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c15")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c16 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c16")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c17 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c17")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c18 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c18")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c19 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c19")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
                <div className='hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)]  border-2 border-[#A9B0C6] rounded-lg h-[100%] w-[100%] max-sm:w-[90v%] max-sm:h-[90%] c20 c-inv flex justify-center justify-items-center p-5 items-center' onClick={() => handleClick("c20")}><FontAwesomeIcon icon={faCloudMoon} className='absolue bottom-2 right-2'/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export default ChooseModal
