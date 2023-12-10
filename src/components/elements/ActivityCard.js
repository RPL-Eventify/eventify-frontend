import { parseISO, format } from 'date-fns';

export default function ActivityCard({ card }) {
  const startDate = parseISO(card.waktu_mulai);
  const endDate = parseISO(card.waktu_akhir);
  return (
    <div className="rounded-xl border border-cyan-600 p-2">
      <div className="grid h-full grid-rows-[auto_1fr_auto_auto] gap-2">
        <div className="text-center text-xl font-bold">{card.judul}</div>
        <div>{card.deskripsi}</div>
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
