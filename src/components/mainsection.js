import { useState } from "react";
import { AddNewNote } from "./addNewNote";
import { Card } from "./card";

export const Mainsection = ({ tags, addNewNote, notes }) => {
  const [newNoteVisible, setNewNoteVisible] = useState(false);

  return (
    <div className="mainsection">
      <AddNewNote
        newNoteVisible={newNoteVisible}
        setNewNoteVisible={setNewNoteVisible}
        tags={tags}
        addNewNote={addNewNote}
      />
      <div className="pinned">
        <h3>Pinned</h3>
        {notes
          .filter((note) => note.pinned)
          .map(({ title, text, pinned, bgColor, category, id }) => {
            return (
              <Card
                title={title}
                text={text}
                pinned={pinned}
                bgColor={bgColor}
                category={category}
                id={id}
              />
            );
          })}
      </div>
      <div className="others">
        <h3>Others</h3>
        {notes
          .filter((note) => note.pinned !== true)
          .map(({ title, text, pinned, bgColor, category, id }) => {
            return (
              <Card
                title={title}
                text={text}
                pinned={pinned}
                bgColor={bgColor}
                category={category}
                id={id}
              />
            );
          })}
      </div>
    </div>
  );
};
