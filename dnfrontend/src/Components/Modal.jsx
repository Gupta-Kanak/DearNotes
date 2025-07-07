import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCloudMoon,
  faPalette,
  faPaw,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import NoteContext from "../Context/NoteContext";
import "./Notes.css";
import ChooseModal from "./ChooseModal";

function Modal(props) {
  const data = useContext(NoteContext);
  const { editnote, delnote } = data;
  const handleDel = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      delnote(props.eid);
    }
    //props.setOpen(false);
  };

  const [chooseStyle, setChoose] = useState(false);
  const [style, setStyle] = useState(props.style);
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  let new_title = title;
  let new_description = description;

  const handleEdit = () => {
    setTitle(new_title);
    setDescription(new_description);
    editnote(props.eid, new_title, new_description, style);
    setEditable(false);
  };

  const handleCancel = () => {
    props.setOpen(false);
  };

  return createPortal(
    <>
      <div className="fixed inset-0 h-screen w-screen backdrop-brightness-50 z-50 flex justify-center   ">
        <div
          className={`mx-6 my-6 border-2 border-[#A9B0C6] rounded-lg w-[75%] h-[75%] max-sm:w-[90vmin] max-sm:h-[80vmin] ${style}`}
        >
          <div className="rounded-lg backdrop-blur-[2px] h-[100%] w-[100%] text-[1.5rem] p-6">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faPaw} className="text-[2rem]" />
              {editable ? (
                <FontAwesomeIcon
                  icon={faPalette}
                  className="hover:cursor-pointer hover:scale-120"
                  onClick={() => setChoose(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPen}
                  className="hover:cursor-pointer hover:scale-120"
                  onClick={() => setEditable(true)}
                />
              )}

              <FontAwesomeIcon
                icon={faTrash}
                className="hover:cursor-pointer hover:scale-120"
                onClick={handleDel}
              />
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => props.setOpen(false)}
                className="hover:cursor-pointer hover:scale-120"
              />
            </div>
            <div className="flex flex-col justify-between h-[95%] pt-2">
              <div className="overflow-auto">
                <div className="text-[2rem] pt-6">
                  <p
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      new_title = e.target.innerText;
                    }}
                  >
                    {title}
                  </p>
                </div>
                <div className="p-4" id="desc_div">
                  <p
                    contentEditable={editable}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      new_description = e.target.innerText;
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[1rem]">{props.date.replaceAll("/", "-")}</p>
                {editable ? (
                  <div>
                    <button
                      onClick={handleEdit}
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
                ) : (
                  <></>
                )}
                <FontAwesomeIcon icon={faCloudMoon} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {chooseStyle && (
        <ChooseModal setStyle={setStyle} ch={setChoose} setadd={(v) => {}} />
      )}
    </>,
    document.body
  );
}

export default Modal;
