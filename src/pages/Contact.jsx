import React, { useState } from "react";
import "../index.css";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqz536b",
        "template_3ipsx1e",
        e.target,
        "6OKsfr5CIv9pf60UZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 4000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* Meta Tags and Schema.org Markup */}
      <Helmet>
        <title> Lusapho Matiti - Full-Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design. Available for freelance projects, collaborations, and more."
        />
        <meta
          property="og:title"
          content=" Lusapho Matiti - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Get in touch with Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design. Available for freelance projects, collaborations, and more."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lusapho Matiti",
              "email": "mailto:Lusaphonatiti07@gmail.com",
              "telephone": "+27635202097",
              "url": "https://lmdevpro.co.za/contact",
              "sameAs": [
                "https://github.com/LusaphoMatiti",
                "https://www.instagram.com/_lusapho_"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Main Section */}
      <section
        id="contacts"
        className="relative min-h-[150vh] font-bebas sm:py-30"
      >
        <div className="container px-4 py-12 mx-auto">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('./contact.webp')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10 flex items-center justify-center">
            <div className="w-full max-w-6xl px-4 py-8 mx-auto">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0 text-white">
                  <h1 className="text-4xl font-semibold capitalize lg:text-3xl">
                    Hire me
                  </h1>

                  <p className="max-w-xl mt-4 mb-4 text-lg">
                    I'm available for freelance projects, collaborations, and
                    more. Feel free to drop a message!
                  </p>

                  <a
                    className="px-6 py-2 mt-6 text-sm font-medium tracking-wide text-black hover:text-[#FAFAFA] capitalize transition-colors duration-300 transform bg-[#FAFAFA] rounded-md hover:bg-[#969696] focus:outline-none focus:ring focus:ring-[#cfcece] focus:ring-opacity-50"
                    href="mailto:Lusaphonatiti07@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    get in touch
                  </a>

                  <div className="mt-6">
                    <h3 className="text-gray-300">Follow me</h3>

                    <div className="flex mt-4 space-x-4">
                      <a
                        className="text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                        </svg>
                      </a>

                      <a
                        className="text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://github.com/LusaphoMatiti"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-7 h-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975C0 17.4775 3.438 21.7975 8.205 23.2975C8.805 23.3975 9.025 23.0475 9.025 22.7475C9.025 22.4775 9.015 21.7475 9.01 20.7475C5.6725 21.4475 4.9675 19.1975 4.9675 19.1975C4.4225 17.7975 3.6325 17.4475 3.6325 17.4475C2.5475 16.7475 3.7175 16.7625 3.7175 16.7625C4.9225 16.8575 5.5525 18.0175 5.5525 18.0175C6.6325 19.8975 8.4225 19.3975 9.1175 19.0975C9.2175 18.3175 9.5225 17.7975 9.8575 17.4975C7.19 17.1975 4.39 16.1975 4.39 11.5475C4.39 10.2375 4.87 9.1775 5.66 8.3475C5.54 8.0475 5.11 6.7975 5.78 5.0975C5.78 5.0975 6.77 4.7775 9.01 6.3475C9.95 6.0775 10.95 5.9475 11.95 5.9475C12.95 5.9475 13.95 6.0775 14.89 6.3475C17.13 4.7775 18.12 5.0975 18.12 5.0975C18.79 6.7975 18.36 8.0475 18.24 8.3475C19.03 9.1775 19.51 10.2375 19.51 11.5475C19.51 16.2075 16.71 17.1975 14.04 17.4975C14.48 17.8975 14.88 18.6975 14.88 19.8975C14.88 21.6475 14.86 22.3475 14.86 22.7475C14.86 23.0475 15.08 23.4075 15.68 23.2975C20.445 21.7975 24 17.4775 24 12.2975C24 5.6675 18.63 0.2975 12 0.2975Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      <a
                        className="text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.instagram.com/_lusapho_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full px-6 py-8 mx-auto bg-white rounded-xl shadow-2xl dark:bg-gray-900">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                      Contact form
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Ask me anything and I would love to hear from you
                    </p>

                    <form className="mt-6" onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-black focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-black focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Message
                        </label>
                        <textarea
                          className="block w-full h-32 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-black focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#626262] hover:bg-[#969696] hover:text-black rounded-md focus:outline-none focus:ring focus:ring-[#cfcece] focus:ring-opacity-50">
                        Send Message
                      </button>
                      {successMessage && (
                        <p className="text-green-500 mt-4 text-center">
                          Message Sent Successfully!
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
