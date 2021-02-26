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
    <div className="input-tag">
      <input value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
      <br />
      <button className="save-tag" onClick={() => addNewTagFunc(tagValue)}>Save</button>
      <button className="close" onClick={() => setAddTagDisplay(!addTagDisplay)}>Close</button>
    </div>
  );
}

export const Navbar = ({ setSelectedTag, tags, addNewTagFunc }) => {
  const [addTagDisplay, setAddTagDisplay] = useState(false);
  const [tagValue, setTagValue] = useState("");

  return (
    <div className="navbar">
      <h1>Notify</h1>
      <div className="filter-tags">
        <h3>Filter by tag</h3>
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} setSelectedTag={setSelectedTag} />;
        })}
      </div>
      <div className="add-new-tag">
        <button className="main-btn" onClick={() => setAddTagDisplay(!addTagDisplay)}>
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
        ) : 
          ""
        }
      </div>
    </div>
  );
};
