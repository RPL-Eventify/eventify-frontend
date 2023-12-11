import EventCard from './EventCard';
import EventModal from '@/components/elements/EventModal';
import { useState } from 'react';
import { Fragment } from 'react';

export default function EventCards({ cards }) {
  const [openModalIndex, setOpenModalIndex] = useState(-1);

  return (
    <div className="m-2 grid auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[200px] gap-6 p-4">
      {cards.map((card, index) => (
        <Fragment key={card.id}>
          <EventCard
            card={card}
            onClick={() => setOpenModalIndex(index)}
            clicked={openModalIndex === index}
          />
          <EventModal
            openModal={openModalIndex === index}
            setOpenModalIndex={setOpenModalIndex}
            card={card}
          />
        </Fragment>
      ))}
    </div>
  );
}
