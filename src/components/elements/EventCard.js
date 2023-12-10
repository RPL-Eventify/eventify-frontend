export default function EventCard({ card }) {
  return (
    <div className="rounded-xl border border-cyan-600 p-2">
      <div className="grid h-full grid-rows-[auto_1fr_auto] gap-2">
        <div className="text-center text-xl font-bold">{card.judul}</div>
        <div>{card.deskripsi}</div>
        <div className="font-bold">Deadline: {card.tenggat_waktu ?? '-'}</div>
      </div>
    </div>
  );
}
