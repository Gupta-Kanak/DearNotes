import React, { useState } from "react";
import NoteContext from "./NoteContext";

function NoteState(props) {
  let [notes, setNotes] = useState([]);
  const host = "http://localhost:8000";

  //get notes
  let getnotes = async () => {
    let url = `${host}/api/notes/fetchall`;
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });

    let data = await response.json();
    setNotes(data.notes);
  };

  //to add note
  let addnote = async (title, description, style) => {
    if (title.trim(" ") === "" || style.trim(" ") === "") {
      alert("Please fill the title field....");
      return;
    }
    let url = `${host}/api/notes/add`;
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        style: style,
      }),
    });
    let data = await response.json();
    setNotes(notes.concat(data.note));
  };

  //to edit
  let editnote = async (id, title, description, style) => {
    if (!title || title.trim(" ") === "") {
      alert("Title of the note cannot be empty.");
      return;
    }
    let url = `${host}/api/notes/edit/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ title, description, style }),
    });

    //let data = await response.json();

    setNotes(
      notes.map((note) => {
        if (note._id === id) {
          return {
            ...note,
            title: title,
            description: description,
            style: style,
          };
        }
        return note;
      })
    );
  };

  //to delete
  let delnote = async (id) => {
    let url = `${host}/api/notes/delete/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });

    const new_notes = notes.filter((note) => {
      if (note._id === id) return false;
      return true;
    });

    setNotes(new_notes);
  };
  return (
    <>
      <NoteContext.Provider
        value={{ notes, addnote, editnote, getnotes, delnote }}
      >
        {props.children}
      </NoteContext.Provider>
    </>
  );
}

export default NoteState;
