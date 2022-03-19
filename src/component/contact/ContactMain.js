import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall, IoMdMail } from "react-icons/io";
import "../../css/Contact.css";

function ContactMain() {
  return (
    <div className="contact-main-container">
      <div className="contact-submain-container">
        <div className="contact-left">
          <div className="contact-left-left">
            <div className="contact-left-right-top-img">
              <img
                src="https://dentalforhome.s3.amazonaws.com/images/contact.png"
                alt="Couldn't Load!"
                style={{ height: `300px`, width: `375px` }}
              />
            </div>
            <div className="contact-left-title">
              <p>Contact Us</p>
            </div>
            <div className="contact-left-subtitle">
              <p>We are here for you! How can we help?</p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone Number" />
              <textarea
                type="textarea"
                placeholder="Go ahead, we are listening....."
                rows={9}
              />
            </div>
          </div>
          <div className="contact-left-right">
            <div className="contact-left-right-top">
              <img
                src="https://dentalforhome.s3.amazonaws.com/images/contact.png"
                alt="Couldn't Load!"
                style={{ height: `300px`, width: `375px` }}
              />
            </div>
            <div className="contact-left-right-bottom">
              <div className="contact-access">
                <HiLocationMarker
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>Delhi, India</p>
              </div>
              <div className="contact-access">
                <IoIosCall
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>+91 12345 12345</p>
              </div>
              <div className="contact-access">
                <IoMdMail
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>contact@dentalforhome.com</p>
              </div>
            </div>
            {/* <div className="contact">
              <Faq data={data} styles={styles} config={config} />
            </div> */}
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-icon">
            <BsFacebook
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <RiInstagramFill
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <BsLinkedin
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <BsTwitter
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;
