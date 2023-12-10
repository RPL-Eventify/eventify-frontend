import Layout from '@/components/Layout';
import TabBar from '@/components/elements/TabBar';
import EventCards from '@/components/elements/EventCards';
import ActivityCards from '@/components/elements/ActivityCards';
import PATH from '@/routes/paths';
import useSWR from 'swr';
import { useAuthContext } from '@/contexts/AuthContext';
import { useState } from 'react';

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

  const [events, activites] = await Promise.all([
    eventsResponse.json(),
    activitesResponse.json(),
  ]);

  return {
    events,
    activites,
  };
}

export default function Projects() {
  const { tokens } = useAuthContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, error, isLoading } = useSWR(
    [[PATH.projectsEvent, PATH.projectsAcitivy], tokens],
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
        Error
      </Layout>
    );
  }
  if (isLoading) {
    return (
      <Layout>
        <TabBar choices={tabChoices} setActiveIndex={setActiveIndex} />
        Loading...
      </Layout>
    );
  }

  const cards =
    activeIndex === 0 ? (
      <EventCards cards={data.events} />
    ) : (
      <ActivityCards cards={data.activites} />
    );

  return (
    <Layout>
      <TabBar choices={tabChoices} setActiveIndex={setActiveIndex} />
      {cards}
    </Layout>
  );
}

Projects.requireAuth = true;
