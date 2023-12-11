import ActivityCard from './ActivityCard';
import ActivityModal from './ActivityModal';
import { useState } from 'react';
import { Fragment } from 'react';

export default function ActivityCards({ cards, isArchived }) {
  const [openModalIndex, setOpenModalIndex] = useState(-1);
  return (
    <div className="m-2 grid auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[200px] gap-6 p-4">
      {cards.map((card, index) => (
        <Fragment key={card.id}>
          <ActivityCard
            card={card}
            onClick={() => setOpenModalIndex(index)}
            clicked={openModalIndex === index}
          />
          <ActivityModal
            openModal={openModalIndex === index}
            setOpenModalIndex={setOpenModalIndex}
            card={card}
            isArchived={isArchived}
          />
        </Fragment>
      ))}
    </div>
  );
}
