import Form from '../components/Form';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="section">
      <h2 className="navbar-title">Contact me</h2>
      <h3 className="project-title text-contact-me">
        If you have an application you are interested in developing, a feature that you need built, or a project that needs coding, I&apos;d love to help with it.
      </h3>
      <Form />
    </div>
  );
};

export default Contact;
