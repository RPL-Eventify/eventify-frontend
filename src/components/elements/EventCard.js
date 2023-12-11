import { parseISO, format } from 'date-fns';

export default function EventCard({ card, onClick, clicked }) {
  const startDate = parseISO(card.waktu_mulai);
  const endDate = parseISO(card.waktu_akhir);
  const clickedColor = clicked ? 'bg-cyan-600 text-white' : '';

  return (
    <div
      className={`rounded-xl border border-cyan-600 p-2 hover:bg-cyan-600 hover:text-white hover:ease-in ${clickedColor}`}
      onClick={onClick}
    >
      <div className="gap- grid h-full grid-rows-[auto_100px_auto_auto]">
        <div className="text-center text-xl font-bold">{card.judul}</div>
        <div className="line-clamp-4">{card.deskripsi}</div>
        <div>
          <span className="font-bold">Start Date: </span>
          <time dateTime={card.waktu_mulai}>
            {format(startDate, 'd LLLL yyyy')}
          </time>
        </div>

        <div>
          <span className="font-bold">End Date:</span>{' '}
          <time dateTime={card.waktu_akhir}>
            {format(endDate, 'd LLLL yyyy')}
          </time>
        </div>
      </div>
    </div>
  );
}
