import { Button, Modal } from 'flowbite-react';

export default function ActivityModal({ openModal, setOpenModalIndex, card }) {
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
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModalIndex(-1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
