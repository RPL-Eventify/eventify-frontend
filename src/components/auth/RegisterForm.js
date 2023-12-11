import { useState } from 'react';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function RegisterForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
    nama_depan: '',
    nama_belakang: '',
  });

  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  function handleChange(target) {
    setData({ ...data, [target.id]: target.value });
  }

  async function handleRegister() {
    if (isLoading === true) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(PATH.register, data);
      setLoading(false);

      // Notify success
      toast.success('Registration successful!', {
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
        router.push('/');
      }, 3000);

      // Clear form after submission if needed
      setFormData({
        email: '',
        password: '',
        nama_depan: '',
        nama_belakang: '',
      });
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
      <form className="m-4 flex h-full max-h-screen w-full max-w-screen-sm flex-col justify-around gap-5 rounded-xl rounded-r-xl border border-cyan-600 p-4 shadow-md">
        <h1 className="text-x text-center text-xl font-bold">
          Register Account
        </h1>
        <div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="nama_depan" value="Your First Name" />
            </div>
            <TextInput
              id="nama_depan"
              type="text"
              name="nama_depan"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="nama_belakang" value="Your Last Name" />
            </div>
            <TextInput
              id="nama_belakang"
              type="text"
              name="nama_belakang"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              placeholder="name@mail.com"
              name="email"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
        </div>
        <div className="flex place-content-center justify-center ">
          <Button onClick={handleRegister}>Register</Button>
        </div>
      </form>
    </>
  );
}
