import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null); // ✅ type the ref
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { // ✅ type the event
    e.preventDefault();
    setIsSending(true);

    if (!formRef.current) return; // ✅ safeguard: formRef can be null

    emailjs
      .sendForm(
        "team4-portfolio",     // your Service ID
        "template_e0rgy8b",    // your Template ID
        formRef.current,      // now correctly typed
        'XK5zqrQTClI847sr6'    // your Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          formRef.current?.reset(); // ✅ use optional chaining
        },
        (error) => {
          setIsSending(false);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-400">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800/50">
          <form  ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                id="name"
                required
                name="user_name"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                id="email"
                name="user_email"
                placeholder="you@example.com"
                type="email"
                required
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                id="message"
                placeholder="Your message..."
                name='message'
                rows={4}
                required
              ></textarea>
            </div>
            <button
              className="w-full rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-colors hover:bg-primary/90"
              type="submit"
            >
              {isSending ? "Sending..." : sent ? "✅ Sent!" : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center gap-8 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800/50">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg
                fill="currentColor"
                height="28"
                viewBox="0 0 256 256"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48Zm-8,136H40V64H216Zm-93.37,71.63L184,192H72l61.37,63.63a8,8,0,0,0,11.26,0ZM128,144a24,24,0,1,1,24-24A24,24,0,0,1,128,144Zm0-32a8,8,0,1,0,8,8A8,8,0,0,0,128,112Z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                belaibyoucef3@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg
                fill="currentColor"
                height="28"
                viewBox="0 0 256 256"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M222.3,138.8a63.5,63.5,0,0,0-43.1-43.1,13,13,0,0,0-13.4,1.8l-15.3,12.2a4.7,4.7,0,0,1-6.1.1,114.2,114.2,0,0,1-53.2-53.2,4.7,4.7,0,0,1,.1-6.1L103.1,35a13,13,0,0,0,1.8-13.4,63.5,63.5,0,0,0-43.1-43.1A12.9,12.9,0,0,0,48.2,0a22,22,0,0,0-13,6.3L16.4,25.1A37.2,37.2,0,0,0,8.2,48.2a197.8,197.8,0,0,0,199.6,199.6,37.2,37.2,0,0,0,23.1-8.2l18.8-18.8a22,22,0,0,0,6.3-13A12.9,12.9,0,0,0,222.3,138.8ZM207.8,227.8a21.2,21.2,0,0,1-13.1,4.6,181.8,181.8,0,0,1-182.9-183A21.2,21.2,0,0,1,23.1,36.2l18.8-18.8,13.2.9a47.5,47.5,0,0,1,32.3,32.3l.9,13.2L76.1,76.1a20.6,20.6,0,0,0-.4,26.5,129.8,129.8,0,0,0,60.4,60.4,20.6,20.6,0,0,0,26.5-.4l12.3-12.3,13.2.9a47.5,47.5,0,0,1,32.3,32.3Z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                +213 5 41 44 34 77
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg
                fill="currentColor"
                height="28"
                viewBox="0 0 256 256"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a40,40,0,0,1-80,0,8,8,0,0,1,16,0,24,24,0,0,0,48,0,8,8,0,0,1,16,0Z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maelma 3, Sidi Abdellah Algiers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
