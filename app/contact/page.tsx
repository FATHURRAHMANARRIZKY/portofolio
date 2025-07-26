import React from "react";

const Contact = () => {
  return (
    <div className="contact-container md:pt-8 flex justify-center items-center w-full h-screen px-16">
      <div className="contact-box flex flex-col md:flex-row w-lg md:w-[1024px] md:h-[360px] rounded-md">
        <div className="left-side w-xs md:w-[480px] md:h-[480px] rounded-l-md px-8 md:pt-8">
          <h1 className="text-5xl font-extrabold">Let&apos;s Get In Touch.</h1>
          <p className="pt-4 text-lg text-justify">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Just drop me a message,
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="Right-side w-[360px] md:w-[512px] md:h-[480px] rounded-r-md px-8 pt-8">
          <h1 className="text-2xl">Contact Us.</h1>
          <form action="/" method="post" className="flex flex-col gap-2 pt-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id=""
              className="bg-white h-8 rounded-md focus:outline-none px-2 text-black"
            />
            <label>Email</label>
            <input
              type="text"
              name="name"
              id=""
              className="bg-white h-8 rounded-md focus:outline-none px-2 text-black"
            />
              <input
                type="submit"
                value="Send"
                className="w-full h-8 bg-gray-800 mt-4 rounded-lg hover:bg-gray-700"
              />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
