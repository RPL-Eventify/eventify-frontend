import Layout from '@/components/Layout';
import TabBar from '@/components/elements/TabBar';
import EventCards from '@/components/elements/EventCards';
import ActivityCards from '@/components/elements/ActivityCards';
import PATH from '@/routes/paths';
import useSWR from 'swr';
import { useAuthContext } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Spinner, Button, Modal } from 'flowbite-react';
import ActivityForm from '@/components/elements/ActivityForm';

async function fetcher(url, tokens) {
  const activitesFetch = fetch(url[0], {
    method: 'GET',
    headers: { Authorization: `Bearer ${tokens.access}` },
  });

  const [activitesResponse] = await Promise.all([
    activitesFetch,
  ]);

  if (!activitesResponse.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const [activites] = await Promise.all([
    activitesResponse.json(),
  ]);

  return {
    activites,
  };
}

export default function Resources() {
  const [openModal, setOpenModal] = useState(false);
  const { tokens } = useAuthContext();
  const { data, error, isLoading } = useSWR(
    [[PATH.resourcesAcitivy], tokens],
    ([url, token]) => fetcher(url, token),
  );


  if (error) {
    return (
      <Layout>
        <div className="flex h-full items-center justify-center">
          Error has occured. Please refresh the page!
        </div>
      </Layout>
    );
  }
  if (isLoading) {
    return (
      <Layout>
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


  return (
    <Layout>
      <div className="mt-8 flex flex-col items-center">
        <Button onClick={() => setOpenModal(true)}>Add Aktivitas</Button>
        <Modal
          show={openModal}
          size="lg"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <ActivityForm />
          </Modal.Body>
        </Modal>
      </div>
      <ActivityCards cards={data.activites} />
    </Layout>
  );
}

Resources.requireAuth = true;
