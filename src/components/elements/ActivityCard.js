export default function ActivityCard({ card, onClick, clicked }) {
  const clickedColor = clicked ? 'bg-cyan-600 text-white' : '';

  return (
    <div
      className={`rounded-xl border border-cyan-600 p-2 hover:bg-cyan-600 hover:text-white hover:ease-in ${clickedColor}`}
      onClick={onClick}
    >
      <div className="grid h-full grid-rows-[auto_100px_auto] gap-2">
        <div className="text-center text-xl font-bold">{card.judul}</div>
        <div className="line-clamp-4">{card.deskripsi}</div>
        <div className="font-bold">Deadline: {card.tenggat_waktu ?? '-'}</div>
      </div>
    </div>
  );
}
