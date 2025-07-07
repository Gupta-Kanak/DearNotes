import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCloudMoon,
  faPaw,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import NoteContext from "../Context/NoteContext";
import "./Notes.css";

function AddNote(props) {
  const data = useContext(NoteContext);
  const { addnote } = data;

  let new_title = "";
  let new_description = "";

  const handleAdd = () => {
    addnote(new_title, new_description, props.style);
    props.ad(false);
  };
  const handleCancel = () => {
    props.ad(false);
  };

  return createPortal(
    <>
      <div className="fixed inset-0 h-screen w-screen backdrop-brightness-50 z-50 flex justify-center   ">
        <div
          className={`mx-6 my-6 border-2 border-[#A9B0C6] rounded-lg w-[75%] h-[75%] max-sm:w-[90vmin] max-sm:h-[80vmin] ${props.style}`}
        >
          <div className="rounded-lg backdrop-blur-[2px] h-[100%] w-[100%] text-[1.5rem] p-6">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faPaw} className="text-[2rem]" />
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => props.ad(false)}
                className="hover:cursor-pointer hover:scale-120"
              />
            </div>
            <div className="flex flex-col justify-between h-[95%] pt-2">
              <div className="overflow-auto">
                <div className="text-[2rem] pt-6">
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      new_title = e.target.innerText;
                    }}
                  >
                    Add Title
                  </p>
                </div>
                <div className="p-4" id="desc_div">
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      new_description = e.target.innerText;
                    }}
                  >
                    Add Description
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <button
                    onClick={handleAdd}
                    className="mx-3 px-5 py-1 bg-[#1F2232]/20 rounded-lg border-2 border-[#4b5563]/30 inset-shadow-sm inset-shadow-[#A9B0C6]/50 hover:scale-110 hover:cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="mx-3 px-5 py-1 bg-[#1F2232]/20 rounded-lg border-2 border-[#4b5563]/30 inset-shadow-sm inset-shadow-[#A9B0C6]/50 hover:scale-110 hover:cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
                <FontAwesomeIcon icon={faCloudMoon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default AddNote;
