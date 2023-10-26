import Form from '../components/Form';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="section">
      <h2 className="title">Contact me</h2>
      <div className='contact-me-container'>
        <h3 className="text-contact-me">
          If you have an application you are interested in developing, a feature that you need built, or a project that needs coding, I&apos;d love to help with it.
        </h3>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
