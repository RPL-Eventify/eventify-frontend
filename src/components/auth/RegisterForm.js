import { useState } from 'react';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/contexts/AuthContext';
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
  const { saveTokens } = useAuthContext();
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

      saveTokens(response.data.refresh, response.data.access);
      setTimeout(() => {
        router.push('/');
      }, 2000);

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
      <form className="flex h-full max-h-screen w-full max-w-screen-sm flex-col justify-around gap-5 rounded-xl p-4">
        <h1 className="text-x text-center text-xl font-bold">
          Registration Form
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
              //value={formData.nama_depan}
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
              //value={formData.nama_belakang}
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
              //value={formData.email}
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
              //value={formData.password}
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
