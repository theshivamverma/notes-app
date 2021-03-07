import "./style/style.css";
import "./style/responsive.css";
import { v4 as uuid } from "uuid";

import { Navbar, Mainsection } from "./components";
import { useState, useEffect } from "react";

export default function App() {
  const [selectedTag, setSelectedTag] = useState("");

  const [tags, addTags] = useState(["View All", "Work", "Shopping", "Todo", "Study"]);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
    addTags(JSON.parse(localStorage.getItem("tags")));
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags))
  })


  const [menuButtonClicked, setMenuButtonClicked] = useState(false)

  function addNewNote(title, pinned, text, category, bgColor) {
    setNotes(() => [
      ...notes,
      {
        id: uuid(),
        pinned: pinned,
        title,
        text,
        category,
        bgColor,
      },
    ]);
  }

  function togglePinned(cardId, pinStatus){
    setNotes(() => [...notes.map(card => {
      if(card.id === cardId){
        card.pinned = !pinStatus;
      }
      return card;
    })])
  }

  function deleteCard(cardId) {
    setNotes(() => [
      ...notes.filter((card) => card.id !== cardId),
    ]);
  }

  function editNoteChanges(id, title, text, pinned, tagCategory, bgColor){
    setNotes(() => [...notes.map(note => {
      if(note.id === id){
        note.title = title
        note.text = text
        note.pinned = pinned
        note.category = tagCategory
        note.bgColor = bgColor
      }
      return note;
    })])
  }

  function addNewTag(tag) {
    addTags(() => [...tags, tag]);
  }

  // map using reduce, filter using reduce, 

  return (
    <div className="App">
      <i onClick={() => setMenuButtonClicked(!menuButtonClicked)} className="ri-menu-3-line menuicon"></i>
      <div className="container">
        <Navbar
          setSelectedTag={setSelectedTag}
          tags={tags}
          addNewTagFunc={addNewTag}
          menuButtonClicked={menuButtonClicked}
          setMenuButtonClicked={setMenuButtonClicked}
        />
        <Mainsection
          tags={tags}
          addNewNote={addNewNote}
          notes={
            selectedTag === ""
              ? notes
              : notes.filter((note) => note.category === selectedTag)
          }
          togglePinned={togglePinned}
          deleteCard={deleteCard}
          editNoteChanges={editNoteChanges}
          menuButtonClicked={menuButtonClicked}
        />
      </div>
    </div>
  );
}

