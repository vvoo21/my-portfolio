import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, updateForm, resetFormStatus } from '../redux/slices/formSlice';
import Spinner from '../components/Spinner';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const dispatch = useDispatch();
  const formStatus = useSelector((state) => state.form.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formAction = 'https://formspree.io/f/mrgwoooa';

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateForm(formData));
    
    dispatch(submitForm(formData));
  };
  
  if (formStatus === 'success') {
    setTimeout(() => {
      dispatch(resetFormStatus());
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 4000);
  }

  return (
    <form className="contact-form" action={formAction} method="POST" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        maxLength="30"
        aria-label="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        maxLength="30"
        aria-label="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        rows="7"
        maxLength="500"
        aria-label="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      {formStatus === 'loading' && <Spinner />}
      {formStatus === 'success' && <p className='msn-success'>Your message has taken flight! We'll be in touch soon. 💌🚀</p>}
      <button className="contact-form-submit btns" type="submit">Get in Touch!</button>
    </form>
  )
}

export default Form
