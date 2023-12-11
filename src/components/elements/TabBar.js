function TabItem({ text, index, activeIndex, onClick }) {
  const colorClass =
    index === activeIndex ? 'bg-cyan-600 text-white' : 'bg-white-600 text-cyan';

  return (
    <li
      className={`${colorClass} flex-1 rounded p-2 text-center hover:bg-cyan-600 hover:text-white active:bg-cyan-700`}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

export default function TabBar({ choices, setActiveIndex }) {
  return (
    <nav className="m-2 mx-auto flex w-[75vw] justify-center gap-8 rounded-xl border border-slate-200 p-4 font-bold">
      <ul className="contents">
        {choices.map((choice) => (
          <TabItem
            text={choice.name}
            index={choice.index}
            activeIndex={choice.activeIndex}
            key={choice.name}
            onClick={() => {
              setActiveIndex(choice.index);
            }}
          />
        ))}
      </ul>
    </nav>
  );
}
