import { ToastContainer } from 'react-toastify';
import { Accordion } from 'flowbite-react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="my-5">
          <h1>EVENTIFY</h1>
          <p>Ini isi highlight web app nya</p>
        </div>

        <div className="my-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Apa itu Eventify?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Eventify didesain untuk meningkatkan produktivitas Anda dengan
                  menyediakan plataform untuk menyimpan, merencanakan, dan
                  mengoragnisir acara dan aktivitas Anda. Dengan Eventify anda
                  dapat mengoragnisir acara dan aktivitas Anda menggunakan
                  metode PARA
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Apa itu Metode PARA?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Metode PARA adalah metode yang dibuat oleh Forte. Dalam
                  bukunya, Forte mengatakan bahwa metode PARA adalah sistem yang
                  sederhana, komprehensif, dan fleksibel untuk mengatur semua
                  jenis informasi di semua platform digital. metode PARA terbagi
                  menjadi empat kategori yaitu Projects, Areas, Resources, dan
                  Archives.
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Projects</li>
                  <p className="mb-2 list-disc text-gray-500 dark:text-gray-400">
                    Merupakan acara atau aktivitas yang memiliki tujuan untuk
                    diselesaikan dengan tenggat waktu tertentu
                  </p>
                  <li>Areas</li>
                  <p className="list-disctext-gray-500 mb-2 dark:text-gray-400">
                    Merupakan aktivitas yang berperan penting dalam kehidupan
                    kita, bertindak sebagai standar yang dipertahankan, dan
                    berkelanjutan (tanpa ada batas waktu tertentu)
                  </p>
                  <li>Resources</li>
                  <p className="mb-2 list-disc text-gray-500 dark:text-gray-400">
                    Merupakan aktivitas yang cukup menarik perhatian kita,
                    tetapi bukan bagian dari tanggung jawab kita
                  </p>
                  <li>Archives</li>
                  <p className="mb-2 list-disc text-gray-500 dark:text-gray-400">
                    Merupakan acara atau aktivitas yang telah selesai kita
                    lakukan atau tidak lagi termasuk pada tiga kategori
                    sebelumnya
                  </p>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        <div className="my-5">
          <h2>Mulai Sekarang</h2>
          <p>
            Untuk mulai menggunakan Eventify,
            <span>
              {' '}
              <Link
                href="/auth/register"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Daftar sekarang
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
