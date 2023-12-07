import { useState } from 'react';
import Button from '../elements/button';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
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
        const response = await axios.post(PATH.register, formData);
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
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
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
            <form className="flex h-96 w-80 flex-col justify-around rounded-xl p-4">
                <h1 className="text-x text-center text-xl font-bold">Registration Form</h1>
                <div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block">
                        First Name:
                        </label>
                        <input
                        type="text"
                        id="first_name"
                        className="w-full"
                        onChange={(e) => handleChange(e.target)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block">
                        Last Name:
                        </label>
                        <input
                        type="text"
                        id="Last_name"
                        className="w-full"
                        onChange={(e) => handleChange(e.target)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">
                        Email:
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="w-full"
                        onChange={(e) => handleChange(e.target)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">
                        Password:
                        </label>
                        <input
                        type="password"
                        id="password"
                        className="w-full"
                        onChange={(e) => handleChange(e.target)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm_password" className="block">
                        Confirm Password:
                        </label>
                        <input
                        type="confirmPassword"
                        id="confirm_password"
                        className="w-full"
                        onChange={(e) => handleChange(e.target)}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                <Button onClick={handleRegister}>Register</Button>
                </div>
            </form>
        </>
    );
};
