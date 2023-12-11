import { Button, Modal } from 'flowbite-react';
import { baseURL } from '@/routes/paths';
import { toast } from 'react-toastify';

export default function ActivityModal({
  openModal,
  setOpenModalIndex,
  card,
  isArchived,
}) {
  const handleDelete = async () => {
    try {
      await axios.patch(
        `${baseURL}/api/v1/aktivitas/${card.id}/unarchive/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        },
      );
      toast.success(
        `The activity ${card.judul} has been successfully deleted.`,
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        },
      );
      setOpenModalIndex(-1);
      window.location.reload();
    } catch (error) {
      toast.error(error.detail, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const handleUnarchive = async () => {
    try {
      await axios.patch(
        `${baseURL}/api/v1/aktivitas/${card.id}/unarchive/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        },
      );
      toast.success(
        `The activity ${card.judul} has been successfully restored to the category ${card.kategori}`,
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        },
      );
      setOpenModalIndex(-1);
      window.location.reload();
    } catch (error) {
      toast.error(error.detail, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const handleArchive = async () => {
    try {
      await axios.patch(
        `${baseURL}/api/v1/aktivitas/${card.id}/archive/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        },
      );
      toast.success(
        `The activity ${card.judul} has been successfully archived.`,
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        },
      );
      setOpenModalIndex(-1);
      window.location.reload();
    } catch (error) {
      toast.error(error.detail, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModalIndex(-1)}>
        <Modal.Header>{card.judul}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {card.deskripsi}
            </p>
            <div>
              <p>
                <span className="font-semibold">ID:</span>
                {card.id}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {card.lokasi}
              </p>
              <p>
                <span className="font-semibold">Reminder Time:</span>{' '}
                {card.waktu_pengingat}
              </p>
              <p>
                <span className="font-semibold">Deadline:</span>{' '}
                {card.tenggat_waktu}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex">
          <Button color="gray" onClick={() => setOpenModalIndex(-1)}>
            Close
          </Button>
          {isArchived ? (
            <>
              <Button onClick={handleUnarchive}>Unarchive</Button>
              <Button
                className="absolute right-5"
                color="failure"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button onClick={handleArchive}>Archive</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
