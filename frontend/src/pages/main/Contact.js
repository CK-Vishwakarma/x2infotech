import React from "react";
const Contact = () => {
  return (
    <div className="container contact-page">
      <section className=" heading">
        <h1>Our Global Offices</h1>
        <hr />
        <h2 className="sub-heading">
          Coordinates for abs po oordinates for abs positioning the closest
          positioned Coordinates for abs positioning the closest positioned
          parent box of the positioned ting that ments.
        </h2>
      </section>
      <section className="hero">
        <div className="img-container">
          <img src="/images/contact.webp" alt="contact" srcset="" />
        </div>
        <h1 className="heading">
          <span>Where</span> to find us ?
        </h1>
        <hr />
        <h2>Main Branch</h2>
        <p>
          Gayatri Nagar, Gwalior <br /> Madhya Pradesh <br /> 474004
          <br /> <br />
          <h2>Contact-Us</h2>
          Email: info@x2infotech.com <br />
          Email: hr@x2infotech.com <br />
          HR Related Concerns: +91 7000026259 <br />
          IT Related Concers: +91 9407269664 <br />
        </p>
      </section>
      <hr />
      <section className="contact-form">
        <h1>
          Feel free to contact us.
          <br /> We'll be glad to hear from you, buddy.
        </h1>

        <form autoComplete="off">
          <div className="inp-grp">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="inp-grp">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="inp-grp">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="inp-grp">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="inp-grp">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="5"
              placeholder="Your Query..."
              required
            />
          </div>

          <button className="btn contact-btn">Submit</button>
        </form>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8268.896698316825!2d78.21068203955274!3d26.244905671795568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb291f2375057110!2sX2%20Infotech%20Office!5e0!3m2!1sen!2sin!4v1624216335745!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
