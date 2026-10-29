
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
  Linkedin,
  Github,
} from "lucide-react";

import { SiX } from "@icons-pack/react-simple-icons";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_jvagyo2",
        "template_wtjvo2c",
        formRef.current,
        {
          publicKey: "NAm16ZerZ6BzWXWIx",
        }
      );

      setSuccess(true);
      setStatus(
        "Message sent successfully! Thank you for contacting me."
      );

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus(
        error?.text ||
          error?.message ||
          "Message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-heading">
          <p className="section-kicker">REACH OUT</p>
          <h2>Let's Connect</h2>
          <span className="contact-heading-line"></span>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <div className="contact-left">
            <h3>Get in Touch</h3>

            <p className="contact-intro">
              I'm always open to discussing new opportunities,
              creative ideas, or opportunities to be part of your
              vision. Feel free to reach out using the form, or
              via direct email.
            </p>

            {/* Email */}
            <div className="contact-detail">
              <Mail className="contact-icon" size={21} />

              <div className="contact-detail-copy">
                <span className="contact-detail-label">
                  EMAIL
                </span>

                <a href="mailto:delowarhossainsamrat@gmail.com">
                  <strong>
                    delowarhossainsamrat@gmail.com
                  </strong>
                </a>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="contact-detail">
              <Phone className="contact-icon" size={21} />

              <div className="contact-detail-copy">
                <span className="contact-detail-label">
                  MOBILE
                </span>

                <a href="tel:+8801311818876">
                  <strong>+880 1311818876</strong>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-detail">
              <MapPin className="contact-icon" size={22} />

              <div className="contact-detail-copy">
                <span className="contact-detail-label">
                  LOCATION
                </span>

                <strong>Chattogram, Bangladesh</strong>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="contact-social-area">
              <h4>Social Profiles</h4>

              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/in/dhsamrat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="contact-social linkedin-social"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://github.com/dhsamrat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="contact-social github-social"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://x.com/DHSamRat17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="contact-social x-social"
                >
                  <SiX size={18} />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/resume.jpg"
              download
              className="contact-resume-button"
            >
              <Download size={19} />
              Download Resume
            </a>
          </div>

          {/* Right Side: Contact Form */}
          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="contact-name">
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
            />

            <label htmlFor="contact-email">
              Your Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="contact-message">
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Hello Samrat, I'd like to talk about..."
              rows={6}
              required
            />

            <button
              type="submit"
              className="contact-send-button"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={17} />
            </button>

            {status ? (
              <p
                className="contact-form-note"
                role="status"
                style={{
                  color: success ? "green" : "crimson",
                }}
              >
                {status}
              </p>
            ) : (
              <p className="contact-form-note">
                Your message will be sent directly to my email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}