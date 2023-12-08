import { ToastContainer } from 'react-toastify';
import { Row, Col } from 'flowbite';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  return (
    <div>
      <ToastContainer>
        <section id="about">
          <Row>
            <Col size="12">
              <h2>About Your Web App</h2>
              <p>Insert information about your web app here...</p>
            </Col>
          </Row>
        </section>
        <section id="features">
          <Row>
            <Col size="12">
              <h2>Features</h2>
              <p>Highlight the key features of your web app...</p>
            </Col>
          </Row>
        </section>
        {/* Add more sections with information as needed */}
      </ToastContainer>
    </div>
  );
}
