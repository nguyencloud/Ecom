import React from 'react';
import axios from 'axios';
import forward from '../icon-font/chevron-forward-outline.svg';
import call from '../icon-font/call-outline.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Help() {
  const handleSend = async (e) => {
    e.preventDefault();
    toast("Your request has been successfully submitted. Our staff will contact you shortly!");

    await axios.post("http://localhost:8000/user/message-send", {
      phoneTo: "+84389895377",
      bodyMessage:
        `Our customer service center has received your request. We will contact you shortly!`,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="help">
        <div className="chapter">
          <div className="chapter-line" />
          <div className="chapter-name">Instant Support in 5–10 Seconds</div>
        </div>
        <div className="help-container">
          <form className="help-form">
            <div className="center">
              <div className="text">Request Support</div>
            </div>
            <div className="inputField">
              <div className="inputField-item">
                <div className="field">
                  Full Name
                  <div className="strict">*</div>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="field-area"
                />
              </div>
              <div className="inputField-row">
                <div className="inputField-item col-2">
                  <div className="field">
                    Email
                    <div className="strict">*</div>
                  </div>
                  <input
                    type="text"
                    placeholder="abc@example.com"
                    className="field-area"
                  />
                </div>
                <div className="inputField-item col-2">
                  <div className="field">
                    Phone Number
                    <div className="strict">*</div>
                  </div>
                  <input
                    type="text"
                    placeholder="0909999999"
                    className="field-area"
                  />
                </div>
              </div>
              <div className="inputField-item">
                <div className="field">
                  Subject
                  <div className="strict" />
                </div>
                <input
                  type="text"
                  placeholder="Which product are you interested in?"
                  className="field-area"
                />
              </div>
              <div className="inputField-item">
                <div className="field">
                  Message
                  <div className="strict">*</div>
                </div>
                <textarea
                  type="text"
                  placeholder="Please leave your question and we will respond as soon as possible"
                  className="field-area"
                  as="input"
                  style={{ height: 250 }}
                />
              </div>
            </div>
            <button onClick={handleSend} className="submit-btn">
              Submit
            </button>
          </form>
          <div className="help-option">
            <div className="help-option-item">
              <div className="topic">Need to speak with a representative?</div>
              <div className="desc">
                Not sure what to choose? Having issues with your product?
                Chatting with our experienced staff will help you get the best answers and professional advice.
              </div>
              <div className="foot">
                <div className="contact">
                  <div className="text-call" onClick={() => window.location.replace("https://zalo.me/84921430237")}>
                    Chat now
                  </div>
                  <img src={forward} className="help-chat-icon" alt="" />
                </div>
              </div>
            </div>
            <div className="help-option-item">
              <div className="topic">Service Feedback</div>
              <div className="desc">
                To improve our service quality, we value your feedback.
                Contact the highest-level manager at The Fifth Label to share your thoughts.
              </div>
              <div className="foot">
                <div className="contact">
                  <img src={call} className="call-help-icon" alt="" />
                  <div className="text-call">0375783563</div>
                </div>
              </div>
            </div>
            <div className="help-option-item">
              <div className="topic">Already purchased from us?</div>
              <div className="desc center">
                <img src="../img/qr.png" alt="QR code" />
              </div>
              <div className="foot">
                Track your rewards and receive regular promotions from us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
