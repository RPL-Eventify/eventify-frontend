import Layout from '@/components/Layout';
import TabBar from '@/components/elements/TabBar';
import EventCards from '@/components/elements/EventCards';
import ActivityCards from '@/components/elements/ActivityCards';
import PATH from '@/routes/paths';
import useSWR from 'swr';
import { useAuthContext } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Spinner } from 'flowbite-react';

async function fetcher(url, tokens) {
  const eventsFetch = fetch(url[0], {
    method: 'GET',
    headers: { Authorization: `Bearer ${tokens.access}` },
  });
  const activitesFetch = fetch(url[1], {
    method: 'GET',
    headers: { Authorization: `Bearer ${tokens.access}` },
  });

  const [eventsResponse, activitesResponse] = await Promise.all([
    eventsFetch,
    activitesFetch,
  ]);

  if (!eventsResponse.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  if (!activitesResponse.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const [events, activites] = await Promise.all([
    eventsResponse.json(),
    activitesResponse.json(),
  ]);

  return {
    events,
    activites,
  };
}

export default function Areas() {
  const { tokens } = useAuthContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, error, isLoading } = useSWR(
    [[PATH.archivedEvent, PATH.archivedAcitivy], tokens],
    ([url, token]) => fetcher(url, token),
  );

  const tabChoices = [
    {
      name: 'Event',
      index: 0,
      activeIndex: activeIndex,
    },
    {
      name: 'Activity',
      index: 1,
      activeIndex: activeIndex,
    },
  ];

  if (error) {
    return (
      <Layout>
        <TabBar choices={tabChoices} setActiveIndex={setActiveIndex} />
        <div className="flex h-full items-center justify-center">
          Error has occured. Please refresh the page!
        </div>
      </Layout>
    );
  }
  if (isLoading) {
    return (
      <Layout>
        <TabBar choices={tabChoices} setActiveIndex={setActiveIndex} />
        <div className="m-2 grid auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[200px] gap-6 p-4">
          {[...Array(5)].map((_, id) => (
            <div
              key={id}
              className="flex items-center justify-center rounded-xl bg-slate-200"
            >
              <Spinner />
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  const cards =
    activeIndex === 0 ? (
      <EventCards cards={data.events} isArchived={true}/>
    ) : (
      <ActivityCards cards={data.activites} isArchived={true}/>
    );

  return (
    <Layout>
      <TabBar choices={tabChoices} setActiveIndex={setActiveIndex} />
      {cards}
    </Layout>
  );
}

Areas.requireAuth = true;
