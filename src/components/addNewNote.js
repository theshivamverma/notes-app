import { useState } from "react";

import pinnedImage from "../images/pinned.png"
import unpinnedImage from "../images/unpinned.png"

export const AddNewNote = ({
  newNoteVisible,
  setNewNoteVisible,
  tags,
  addNewNote,
}) => {
  const [pinned, setPinned] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tagCategory, setTagCategory] = useState("");
  const [bgColor, setBgColor] = useState("");
  
  const colors = [
    "#FECACA",
    "#FDE68A",
    "#A7F3D0",
    "#93C5FD",
    "#C4B5FD",
    "#c7ecee",
  ];

  return (
    <div className="addnewnote">
      <input
        type="text"
        placeholder="Title"
        style={{ display: newNoteVisible ? "initial" : "none" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="pin"
        style={{ display: newNoteVisible ? "initial" : "none" }}
        onClick={() => setPinned(!pinned)}
      >
        <img src={ pinned ? pinnedImage : unpinnedImage} />
      </button>
      <input
        type="text"
        placeholder="Take a note..."
        onFocus={() => setNewNoteVisible(true)}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="bottom-inputs">
        <select
          style={{ display: newNoteVisible ? "initial" : "none" }}
          onChange={(e) => setTagCategory(e.target.value)}
        >
          <option selected hidden>
            Select Tag
          </option>
          {tags.map((tag) => {
            return <option value={tag}>{tag}</option>;
          })}
        </select>
        <div
          className="colors"
          style={{ display: newNoteVisible ? "initial" : "none" }}
        >
          {colors.map((color) => {
            return (
              <button
                className="color-pill"
                style={{ backgroundColor: `${color}` }}
                onClick={() => setBgColor(color)}
              ></button>
            );
          })}
        </div>
        <button
          style={{ display: newNoteVisible ? "initial" : "none" }}
          onClick={() => addNewNote(title, pinned, text, tagCategory, bgColor)}
        >
          Submit
        </button>
        <button
          style={{ display: newNoteVisible ? "initial" : "none" }}
          onClick={() => setNewNoteVisible(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
