import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../utils/constant";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs
            .send(
              SERVICE_ID, // EmailJS service ID
              TEMPLATE_ID, // EmailJS template ID
                formData,
                PUBLIC_KEY // EmailJS public key
            )
            .then(
                () => {
                    setSuccess(true);
                    setError(false);
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    setError(true);
                    setSuccess(false);
                }
            );
    };

    return (
      <div className="bg-gradient-to-t from-white to-[#4652a4] pt-10 mt-10">
        <div className="max-w-md mx-auto h-auto p-6 bg-white shadow-[10px_10px_10px_5px_#808080] rounded-lg ">
        <h3 className="text-2xl font-semibold text-center mb-4">Email</h3>
        <p> shruti.anantwar28@gmail.com</p>
        </div>
        <div className="max-w-md mx-auto p-6 bg-white shadow-[10px_10px_10px_5px_#808080] rounded-lg mt-10">
            <h3 className="text-2xl font-semibold text-center mb-4">Contact Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-44 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-[#3c5daf] text-white py-2 rounded-md hover:bg-[#274797] transition"
                >
                    Send
                </button>
            </form>
            {success && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-600 text-center mt-2">Failed to send message. Try again.</p>}
        </div>
      </div>
    );
};

export default Contact;
