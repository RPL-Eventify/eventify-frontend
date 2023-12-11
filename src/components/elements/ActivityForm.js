import { useState } from 'react';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { Button, TextInput, Label, Textarea } from 'flowbite-react';

const ActivityForm = () => {
  const router = useRouter();
  const { pathname } = router;
  const { tokens } = useAuthContext();
  const category = pathname.split('/').pop();
  const [activityData, setActivityData] = useState({
    kategori: category,
    judul: '',
    deskripsi: '',
    lokasi: '',
    waktu_pengingat: '',
    tenggat_waktu: '',
  });
  const [isLoading, setLoading] = useState(false);

  function onFormChange(target) {
    let formattedValue = target.value;

    // Check if the target is a datetime-local input
    if (target.type === 'datetime-local') {
      // Format the datetime string to match the expected format without seconds and milliseconds
      const dateTime = new Date(target.value);
      const year = dateTime.getFullYear();
      const month = String(dateTime.getMonth() + 1).padStart(2, '0');
      const day = String(dateTime.getDate()).padStart(2, '0');
      const hours = String(dateTime.getHours()).padStart(2, '0');
      const minutes = String(dateTime.getMinutes()).padStart(2, '0');
      formattedValue = `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    setActivityData({ ...activityData, [target.id]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isLoading === true) {
      return;
    }
    setLoading(true);

    try {

      const response = await axios.post(PATH.createActivity, activityData, {
        headers: {
          Authorization: `Bearer ${tokens?.access}`,
        },
      });
      setLoading(false);

      // Notify success
      toast.success('Success!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      setTimeout(() => {
        router.reload();
      }, 3000);
    } catch (error) {
      const errors = error.response.data.errors;
      setLoading(false);

      // Notify error
      errors.forEach((error) => {
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
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-x text-center text-xl font-bold">Add Activity </h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Judul" />
          </div>
          <TextInput
            type="base"
            id="judul"
            className="w-full"
            onChange={(e) => onFormChange(e.target)}
            disabled={isLoading}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Deskripsi" />
          </div>
          <Textarea
            type="comment"
            id="deskripsi"
            className="w-full"
            onChange={(e) => onFormChange(e.target)}
            disabled={isLoading}
            placeholder="Deskripsi"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Lokasi" />
          </div>
          <TextInput
            type="base"
            id="lokasi"
            className="w-full"
            onChange={(e) => onFormChange(e.target)}
            disabled={isLoading}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Tenggat Waktu" />
          </div>
          <input
            type="datetime-local"
            id="tenggat_waktu"
            name="tenggat_waktu"
            min="2015-06-07T00:00"
            max="2030-06-07T00:00"
            onChange={(e) => onFormChange(e.target)}
            disabled={isLoading}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Waktu Pengingat" />
          </div>
          <input
            type="datetime-local"
            id="waktu_pengingat"
            name="waktu_pengingat"
            min="2015-06-07T00:00"
            max="2030-06-07T00:00"
            onChange={(e) => onFormChange(e.target)}
            disabled={isLoading}
          />
        </div>
        <Button type="submit" disabled={isLoading} isProcessing={isLoading}>
          Add
        </Button>
      </form>
    </>
  );
};

export default ActivityForm;
