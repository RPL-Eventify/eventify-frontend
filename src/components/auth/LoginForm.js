import { useState } from 'react';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { Button, TextInput, Label } from 'flowbite-react';

export default function LoginForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setLoading] = useState(false);
  const { saveTokens } = useAuthContext();
  const router = useRouter();

  function onFormChange(target) {
    setData({ ...data, [target.id]: target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (isLoading === true) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(PATH.login, data);
      setLoading(false);

      // Notify success
      toast.success(
        'Login successful! You will be redirected to the homepage',
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

      saveTokens(response.data.refresh, response.data.access);
      setTimeout(() => {
        router.push('/');
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
        className="m-4 flex h-96 w-80 flex-col justify-around rounded-xl rounded-r-xl border border-cyan-600 p-4 shadow-md"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <h1 className="text-x text-center text-xl font-bold">Login Form</h1>
        <div>
          <div className="mb-4">
            <Label htmlFor="email">Email:</Label>
            <TextInput
              type="email"
              id="email"
              className="w-full"
              onChange={(e) => onFormChange(e.target)}
              disabled={isLoading}
              placeholder="eventify@mail.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <TextInput
              type="password"
              id="password"
              className="w-full"
              onChange={(e) => onFormChange(e.target)}
              disabled={isLoading}
              required
            />
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <Button
            type="submit"
            isProcessing={isLoading}
            disabled={isLoading}
            className="flex-1"
          >
            Login
          </Button>
          <Button disabled={isLoading} className="flex-1">
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
