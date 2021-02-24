import { useState } from "react";

function Tag({ tag, setSelectedTag }) {
  return (
    <button
      style={{ display: "block", margin: "1rem auto" }}
      onClick={() => setSelectedTag(tag)}
    >
      {tag}
    </button>
  );
}

function AddTag({
  addTagDisplay,
  setAddTagDisplay,
  addNewTagFunc,
  tagValue,
  setTagValue,
}) {
  return (
    <div>
      <input value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
      <br />
      <button onClick={() => addNewTagFunc(tagValue)}>Add new tag</button>
      <button onClick={() => setAddTagDisplay(!addTagDisplay)}>Close</button>
    </div>
  );
}

export const Navbar = ({ setSelectedTag, tags, addNewTagFunc }) => {
  const [addTagDisplay, setAddTagDisplay] = useState(false);
  const [tagValue, setTagValue] = useState("");

  return (
    <div className="navbar">
      {tags.map((tag) => {
        return <Tag key={tag} tag={tag} setSelectedTag={setSelectedTag} />;
      })}
      <button onClick={() => setAddTagDisplay(!addTagDisplay)}>
        Add new tag
      </button>
      {addTagDisplay ? (
        <AddTag
          addTagDisplay={addTagDisplay}
          setAddTagDisplay={setAddTagDisplay}
          addNewTagFunc={addNewTagFunc}
          tagValue={tagValue}
          setTagValue={setTagValue}
        />
      ) : (
        ""
      )}
    </div>
  );
};
