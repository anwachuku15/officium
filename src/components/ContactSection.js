import React from "react";
import "./ContactSection.css";

// TODO: ANIMATIONS & CLEANER FORM & BUTTON WRAPPER FOR SUBMIT BUTTON
const ContactSection = () => {
  return (
    <div className="contactsection__container">
      <div className="contactsection__headerContainer">
        <div className="contactsection__headerDiv">
          <div className="contactsection__header">
            <div className="contactsection__headerInner">
              <h2>Let's start a conversation</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="contactsection__messageFormContainer">
        <div className="contactsection__messageFormDiv">
          <div className="contactsection__messageFormAnim">
            <div className="contactsection__messageForm">
              <form action="" method="post">
                <p className="name">
                  <label for="name" className="formLabel">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    required
                    placeholder="Name"
                  />
                </p>
                <p className="email">
                  <label for="email" className="formLabel">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="input"
                    required
                    placeholder="Email"
                  />
                </p>
                <p className="phone">
                  <label for="phone" className="formLabel">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="input"
                    required
                    placeholder="Phone"
                  />
                </p>

                <p className="subject">
                  <label for="subject" className="formLabel">
                    Subject
                  </label>
                  <select name="Subject" id="subject" className="select">
                    <option value="">Subject</option>
                    <option value="Clinical Research">Clinical Research</option>
                    <option value="Custom Solutions">Custom Solutions</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Project Management">
                      Project Management
                    </option>
                    <option value="Public Health">Public Health</option>
                    <option value="Other">Other</option>
                  </select>
                </p>
                <p className="messageBody">
                  <label for="message" className="formLabel">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="textarea"
                    placeholder="Message"
                  />
                </p>
                {/* HIDDEN VALIDATIONS */}
                <div className="contactBottom">
                  <div className="contactBottomLeft"></div>
                  <button type="submit" className="">
                    Submit Message
                  </button>
                </div>

                {/* HIDDEN SUCCESS */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="contactsection__emptyDiv"></div>
    </div>
  );
};

export default ContactSection;
