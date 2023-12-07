import { useState } from 'react';
//import Button from '../elements/button';
import axios from 'axios';
import PATH from '@/routes/paths';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      <form className="flex h-full max-h-screen w-full max-w-screen-sm gap-5 flex-col justify-around rounded-xl p-4">
        <h1 className="text-x text-center text-xl font-bold">
          Registration Form
        </h1>
        <div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="first_name" value="Your First Name" />
            </div>
            <TextInput 
              id="first_name" 
              type="text" 
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required />
          </div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="last_name" value="Your Last Name" />
            </div>
            <TextInput 
              id="last_name" 
              type="text" 
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required />
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
                value={formData.email}
                onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required />
          </div>
          <div className="mb-4 block">
            <div className="mb-2 block">
              <Label htmlFor="confirm_password" value="Confirm password" />
            </div>
            <TextInput 
              id="confirm_password" 
              type="password" 
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required />
          </div>
        </div>
        <div className="flex justify-center place-content-center ">
          <Button onClick={handleRegister}>Register</Button>
        </div>
      </form>
    </>
  );
}
