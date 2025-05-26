export default function Button({ type, text, handleClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={handleClick}>
      {text}
    </button>
  );
}
