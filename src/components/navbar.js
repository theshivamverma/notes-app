import { useState } from "react";

function Tag({ tag, setSelectedTag, setMenuButtonClicked }) {
  return (
    <button
      style={{ display: "block", margin: "1rem auto" }}
      onClick={() => {
        let sendtagValue = tag === "View All" ? "" : tag;
        setSelectedTag(sendtagValue)
        setMenuButtonClicked(false)
      }}
    >
      {tag}
    </button>
  );
}

function AddTag({ clearValues, addNewTagFunc, tagValue, setTagValue }) {
  return (
    <div className="input-tag">
      <input value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
      <br />
      <button
        className="save-tag"
        onClick={() => {
          addNewTagFunc(tagValue);
          clearValues();
        }}
      >
        Save
      </button>
      <button className="close" onClick={clearValues}>
        Close
      </button>
    </div>
  );
}

export const Navbar = ({
  setSelectedTag,
  tags,
  addNewTagFunc,
  menuButtonClicked,
  setMenuButtonClicked
}) => {
  const [addTagDisplay, setAddTagDisplay] = useState(false);
  const [tagValue, setTagValue] = useState("");

  function clearValues() {
    setAddTagDisplay(false);
    setTagValue("");
  }

  return (
    <div className={menuButtonClicked ? "navbar active" : "navbar"}>
      <h1>
        Notify <i className="ri-close-line" onClick={() => setMenuButtonClicked(false)}></i>
      </h1>
      <div className="filter-tags">
        <h3>Filter by tag</h3>
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} setSelectedTag={setSelectedTag} setMenuButtonClicked={setMenuButtonClicked}/>;
        })}
      </div>
      <div className="add-new-tag">
        <button
          className="main-btn"
          onClick={() => setAddTagDisplay(!addTagDisplay)}
        >
          Add new tag
        </button>
        {addTagDisplay ? (
          <AddTag
            clearValues={clearValues}
            addNewTagFunc={addNewTagFunc}
            tagValue={tagValue}
            setTagValue={setTagValue}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
