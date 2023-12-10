import ActivityCard from './ActivityCard';

export default function ActivityCards({ cards }) {
  return (
    <div className="grid auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[200px] gap-6 p-4">
      {cards.map((card) => (
        <ActivityCard card={card} key={card.id} />
      ))}
    </div>
  );
}
