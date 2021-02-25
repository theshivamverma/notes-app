import { useState } from "react";

import pinnedImage from "../images/pinned.png"
import unpinnedImage from "../images/unpinned.png"

export const AddNewNote = ({
  newNoteVisible,
  setNewNoteVisible,
  tags,
  addNewNote,
  pinned,
  setPinned,
  title,
  setTitle,
  text,
  setText,
  tagCategory,
  setTagCategory,
  bgColor,
  setBgColor,
  colors, 
  editMode
}) => {

  return (
    <div className="addnewnote" style={{backgroundColor: bgColor}}>
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
            return <option selected={tagCategory === tag ? true : false} value={tag}>{tag}</option>;
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
