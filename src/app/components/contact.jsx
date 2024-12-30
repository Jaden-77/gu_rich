"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

  

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log('Success:', result.text);
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error details:', error);
      toast.error(`Failed to send message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-[#0a0a29]" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          CONTACT US
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-4"></div>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1a3a] rounded-lg p-8 shadow-lg">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a29] border border-gray-700 text-white placeholder-gray-400 focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12] outline-none transition-all"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a29] border border-gray-700 text-white placeholder-gray-400 focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12] outline-none transition-all"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a29] border border-gray-700 text-white placeholder-gray-400 focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12] outline-none transition-all"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a29] border border-gray-700 text-white placeholder-gray-400 focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12] outline-none transition-all resize-none"
              ></textarea>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F39C12] text-white py-3 rounded-lg hover:bg-[#E67E22] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-8 space-y-3 text-gray-300 border-t border-gray-700 pt-6">
              <p className="flex items-center gap-3">
                <span className="text-[#F39C12]">📍</span> 
                M Velez St., Capitol, (in front of Aurings Lechon)
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#F39C12]">📞</span>
                Tel: 09950986463
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#F39C12]">✉️</span>
                Email: gurichtrading@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a3a] rounded-lg p-8 shadow-lg h-full">
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d245.33194062356583!2d123.88910209091489!3d10.31697274609844!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d10.316918979666013!2d123.88921943755346!5e0!3m2!1sen!2sph!4v1735374383812!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 