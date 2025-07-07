import React, { useContext, useEffect, useState } from "react";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteContext from "../Context/NoteContext";
import Note from "./Note";
import ChooseModal from "./ChooseModal";
import AddNote from "./AddNote";

function Notes() {
  const [choose, setChoose] = useState(false);
  const [style, setStyle] = useState("");
  const [adding, setAdding] = useState(false);
  const data = useContext(NoteContext);
  const { notes, getnotes } = data;
  useEffect(() => {
    getnotes();
  }, []);

  return (
    <>
      <div className=" bg-cover bg-[#1F2232] bg-dot-pattern bg-centern min-h-screen ">
        <div className="backdrop-blur-[2px] min-h-screen">
          <div className="flex flex-wrap justify-evenly ">
            {notes.length === 0 ? (
              <></>
            ) : (
              notes.map((e) => {
                return (
                  <Note
                    style={e.style}
                    title={e.title}
                    description={e.description}
                    date={e.date}
                    key={e._id}
                    eid={e._id}
                  />
                );
              })
            )}
            <div
              onClick={() => setChoose(true)}
              className="add hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_1rem_0.4rem_rgba(169,176,198,0.3)] mx-6 my-6 border-2 border-[#A9B0C6] rounded-lg w-[370px] h-[300px] max-sm:w-[90vmin] max-sm:h-[80vmin]"
            >
              <div className="rounded-lg backdrop-blur-[2px] h-[100%] w-[100%] text-[4rem] p-6 flex justify-center items-center text-[#1f2232] ">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {choose ? (
        <ChooseModal setStyle={setStyle} ch={setChoose} setadd={setAdding} />
      ) : (
        <></>
      )}

      {adding ? <AddNote style={style} ad={setAdding} /> : <></>}
    </>
  );
}

export default Notes;
