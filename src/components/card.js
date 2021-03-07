import pinnedImage from "../images/pinned.png";
import unpinnedImage from "../images/unpinned.png";

export const Card = ({ title, text, pinned, bgColor,tagCategory, id, togglePinned, deleteCard, editMode, changeEditMode }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <button className="cardbtn card-category">{tagCategory}</button>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="pin">
        <img src={pinned ? pinnedImage : unpinnedImage} alt=""/>
      </button>
      <div className="card-bottom-btns">
        <button
          className="cardbtn change-pin"
          onClick={() => togglePinned(id, pinned)}
        >
          {pinned ? "Unpin" : "Pin"}
        </button>
        <button className="cardbtn edit" onClick={() => changeEditMode(id)}>
          Edit
        </button>
        <button className="cardbtn delete" onClick={() => deleteCard(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
