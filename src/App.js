import "./style/style.css";
import { v4 as uuid } from "uuid";

import { Navbar, Mainsection } from "./components";
import { useState } from "react";

export default function App() {
  const [selectedTag, setSelectedTag] = useState("");

  const [tags, addTags] = useState(["Work", "Shopping", "Todo", "Study"]);

  const [notes, setNotes] = useState([
    {
      id: uuid(),
      pinned: true,
      title: "Make this app",
      text: "Complete Styling, use Indexed DB",
      category: "Todo",
      bgColor: "#fff",
    },
    {
      id: uuid(),
      pinned: true,
      title: "Practice JS concepts",
      text: "ES6+, Async, Await, CB, Promise",
      category: "Todo",
      bgColor: "#fff",
    },
  ]);

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

  function addNewTag(tag) {
    addTags(() => [...tags, tag]);
  }

  return (
    <div className="App">
      <h1>Noty</h1>
      <div className="container">
        <Navbar
          setSelectedTag={setSelectedTag}
          tags={tags}
          addNewTagFunc={addNewTag}
        />
        <Mainsection tags={tags} addNewNote={addNewNote} notes={notes} />
      </div>
    </div>
  );
}

