import { ToastContainer } from 'react-toastify';
import { List, Blockquote } from 'flowbite-react';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="my-5">
          <h1 className="mx-5 mb-5 text-center ">Eventify</h1>
        </div>

        <div className="my-5">
          <Blockquote className="mx-5 mb-2 text-center text-base text-gray-700 dark:text-gray-400 md:text-3xl">
            Eventify didesain untuk meningkatkan produktivitas Anda dengan
            menyediakan plataform untuk menyimpan, merencanakan, dan
            mengoragnisir acara dan aktivitas Anda. Dengan Eventify anda dapat
            mengoragnisir acara dan aktivitas Anda menggunakan metode PARA.
          </Blockquote>
        </div>
        <div className="my-5 mt-10">
          <div>
            <h2 className="mx-5 mb-2 text-gray-800 dark:text-gray-400">
              Apa itu Metode PARA?
            </h2>
          </div>
          <p className="mx-5 mb-2 text-base text-gray-500 dark:text-gray-400 md:text-xl">
            Metode PARA adalah metode yang dibuat oleh Forte. Dalam bukunya,
            Forte mengatakan bahwa metode PARA adalah sistem yang sederhana,
            komprehensif, dan fleksibel untuk mengatur semua jenis informasi di
            semua platform digital. metode PARA terbagi menjadi empat kategori
            yaitu Projects, Areas, Resources, dan Archives.
          </p>
          <List className="mx-5 mb-2 list-disc pl-5 text-base text-gray-500 dark:text-gray-400 md:text-xl">
            <List.Item>Projects</List.Item>
            <p className="mb-2 list-disc text-xl text-gray-500 dark:text-gray-400">
              Merupakan acara atau aktivitas yang memiliki tujuan untuk
              diselesaikan dengan tenggat waktu tertentu
            </p>
            <List.Item>Areas</List.Item>
            <p className="list-disctext-gray-500 mb-2 text-xl dark:text-gray-400">
              Merupakan aktivitas yang berperan penting dalam kehidupan kita,
              bertindak sebagai standar yang dipertahankan, dan berkelanjutan
              (tanpa ada batas waktu tertentu)
            </p>
            <List.Item>Resources</List.Item>
            <p className="mb-2 list-disc text-xl text-gray-500 dark:text-gray-400">
              Merupakan aktivitas yang cukup menarik perhatian kita, tetapi
              bukan bagian dari tanggung jawab kita
            </p>
            <List.Item>Archives</List.Item>
            <p className="mb-2 list-disc text-xl text-gray-500 dark:text-gray-400">
              Merupakan acara atau aktivitas yang telah selesai kita lakukan
              atau tidak lagi termasuk pada tiga kategori sebelumnya
            </p>
          </List>
        </div>
      </div>
    </>
  );
}
