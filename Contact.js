import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API submission
    console.log("Form submitted:", formData);

    // You can replace this with a real API call later
    await new Promise((res) => setTimeout(res, 1000));

    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Message: </label><br />
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
