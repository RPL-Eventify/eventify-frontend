import { Button, Modal } from 'flowbite-react';
import { baseURL }from '@/routes/paths';
import { toast } from 'react-toastify';

export default function EventModal({ openModal, setOpenModalIndex, card }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/archived/acara/${card.id}/delete`);
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
      // Add unarchive logic here

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
      // Add archive logic here

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
                15:15:00
              </p>
              <p>
                <span className="font-semibold">Start Time:</span>{' '}
                {card.waktu_mulai}
              </p>
              <p>
                <span className="font-semibold">End Time:</span>{' '}
                {card.waktu_akhir}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModalIndex(-1)}>
            Close
          </Button>
          {card.kategori === 'archive' ? (
            <>
              <Button onClick={handleUnarchive}>
                Unarchive
              </Button>
              <Button className='absolute right-5' color="failure" onClick={handleDelete}>
                Delete
              </Button>
            </>
          ) : (
            <Button onClick={handleArchive}>
              Archive
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
