import { useState } from "react";
import { AddNewNote } from "./addNewNote";
import { Card } from "./card";

export const Mainsection = ({
  tags,
  addNewNote,
  notes,
  togglePinned,
  deleteCard,
  editNoteChanges,
}) => {
  const [newNoteVisible, setNewNoteVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editNoteId, setEditNoteId] = useState("");
  const [pinned, setPinned] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tagCategory, setTagCategory] = useState("");
  const [bgColor, setBgColor] = useState("");

  const colors = [
    "#FEE2E2",
    "#FEF3C7",
    "#D1FAE5",
    "#BFDBFE",
    "#DDD6FE",
    "#c7ecee",
  ];

  function changeEditMode(editid) {
    setEditMode(true);
    setEditNoteId(editid);
    setNewNoteVisible(true);
    notes.map((note) => {
      if (note.id === editid) {
        setPinned(note.pinned);
        setTitle(note.title);
        setText(note.text);
        setTagCategory(note.category);
        setBgColor(note.bgColor);
      }
    });
  }

  function setToDefault() {
    setPinned(false);
    setTitle("");
    setText("");
    setTagCategory("");
    setBgColor("");
    // setEditMode(false);
    setNewNoteVisible(false);
  }

  return (
    <div className="mainsection">
      <AddNewNote
        newNoteVisible={newNoteVisible}
        setNewNoteVisible={setNewNoteVisible}
        tags={tags}
        addNewNote={addNewNote}
        pinned={pinned}
        setPinned={setPinned}
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        tagCategory={tagCategory}
        setTagCategory={setTagCategory}
        bgColor={bgColor}
        setBgColor={setBgColor}
        colors={colors}
        editMode={editMode}
        setToDefault={setToDefault}
        editNoteChanges={editNoteChanges}
        editNoteId={editNoteId}
      />
      <h3>Pinned</h3>
      <div className="pinned">
        {notes
          .filter((note) => note.pinned)
          .map(({ title, text, pinned, bgColor, category, id }) => {
            return (
              <Card
                title={title}
                text={text}
                pinned={pinned}
                bgColor={bgColor}
                tagCategory={category}
                id={id}
                togglePinned={togglePinned}
                deleteCard={deleteCard}
                editMode={editMode}
                changeEditMode={changeEditMode}
              />
            );
          })}
      </div>
      <h3>Others</h3>
      <div className="others">
        {notes
          .filter((note) => note.pinned !== true)
          .map(({ title, text, pinned, bgColor, category, id }) => {
            return (
              <Card
                title={title}
                text={text}
                pinned={pinned}
                bgColor={bgColor}
                tagCategory={category}
                id={id}
                togglePinned={togglePinned}
                deleteCard={deleteCard}
                changeEditMode={changeEditMode}
              />
            );
          })}
      </div>
    </div>
  );
};
