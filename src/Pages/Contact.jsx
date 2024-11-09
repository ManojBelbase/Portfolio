import React from "react";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 md:mb-6">
        <h1 className="text-3xl font-bold">
          {" "}
          <span className="text-secondary">/</span>contact
        </h1>
        <span className="text-accent text-sm">Contact me at this address</span>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
