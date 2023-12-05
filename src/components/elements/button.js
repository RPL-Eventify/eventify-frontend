export default function Button({ children, onClick }) {
  return (
    <button className="m-2 w-36 p-2" onClick={onClick} type="button">
      {children}
    </button>
  );
}
