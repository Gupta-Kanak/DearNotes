import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faPaw } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import "./Notes.css";

function Note(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={` hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)] mx-6 my-6 border-2 border-[#A9B0C6] rounded-lg w-[370px] h-[300px] max-sm:w-[90vmin] max-sm:h-[80vmin] ${props.style}`}
      >
        <div className="rounded-lg backdrop-blur-[2px] h-[100%] w-[100%] text-[1.5rem] p-6 flex flex-col justify-between">
          <div className="flex overflow-auto">
            <FontAwesomeIcon icon={faPaw} className="p-2" />
            <p className="inline">
              {props.title.length > 70 ? props.title.slice(0, 70) : props.title}
              ......
            </p>
          </div>
          <div className="flex justify-between text-[1.1rem] items-center">
            <p>{props.date.replaceAll("/", "-")}</p>
            <FontAwesomeIcon icon={faCloudMoon} className="text-[1.5rem]" />
          </div>
        </div>
      </div>

      {open && (
        <Modal
          style={props.style}
          title={props.title}
          description={props.description}
          date={props.date}
          eid={props.eid}
          setOpen={setOpen}
        />
      )}
    </>
  );
}

export default Note;
