import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const teamMembers = [
    {
      name: "Aryan Jain",
      role: "Founder & CEO",
      email: "aryan@codequest.com",
      phone: "+91 98765 43210",
      linkedin: "https://linkedin.com/in/aryanjain"
    },
    {
      name: "Rahul Sharma",
      role: "Lead Instructor",
      email: "rahul@codequest.com",
      phone: "+91 91234 56789",
      linkedin: "https://linkedin.com/in/rahulsharma"
    },
    {
      name: "Priya Verma",
      role: "Marketing Head",
      email: "priya@codequest.com",
      phone: "+91 99876 54321",
      linkedin: "https://linkedin.com/in/priyaverma"
    },
    {
      name: "Sandeep Kumar",
      role: "Technical Lead",
      email: "sandeep@codequest.com",
      phone: "+91 96543 21098",
      linkedin: "https://linkedin.com/in/sandeepkumar"
    }
  ];

  return (
    <section className="contact">
      <h2>Contact Our Team</h2>
      <p>Get in touch with us for any queries or collaborations.</p>

      <div className="contact-cards">
        {teamMembers.map((member, index) => (
          <div className="contact-card" key={index}>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="contact-logo">
              <FaEnvelope /> <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
            <p className="contact-logo">
              <FaPhone /> <a href={`tel:${member.phone}`}>{member.phone}</a>
            </p>
            <p className="contact-logo">
              <FaLinkedin /> <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
