import { ToastContainer } from 'react-toastify';
import { Row, Col } from 'flowbite';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <h1 className="font-bold">Hello world!</h1>
      <div>
        <h2>About Your Web App</h2>
        <p>Insert information about your web app here...</p>
        <h2>Features</h2>
        <p>Highlight the key features of your web app...</p>
      </div>
    </>
  );
}
