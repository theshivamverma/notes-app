export const Card = ({ title, text, pinned, bgColor, category, id }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{text}</p>
      <button>{category}</button>
    </div>
  );
};
