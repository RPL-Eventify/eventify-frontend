import { Button, Modal } from 'flowbite-react';

export default function EventModal({ openModal, setOpenModalIndex, card }) {
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
        </Modal.Footer>
      </Modal>
    </>
  );
}
