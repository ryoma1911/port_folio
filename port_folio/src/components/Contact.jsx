import React from 'react';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { SiQiita } from 'react-icons/si';

const contactLinks = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/itaobe_engineer',
    icon: <FaXTwitter size={40} />,
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/ryoma1911',
    icon: <SiQiita size={50} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ryoma1911',
    icon: <FaGithub size={40} />,
  },
];

const Contact = () => (
  <section style={styles.section} id="contact">
    <div style={styles.inner}>
      <h2 style={styles.heading}>Contact</h2>
      <div style={styles.cardContainer}>
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
            className="fade-in"
          >
            <div style={styles.icon}>{contact.icon}</div>
            <p style={styles.name}>{contact.name}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '5rem 1rem',
    backgroundColor: '#f8fafc',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#0f172a',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    padding: '1.5rem',
    width: '160px',
    textDecoration: 'none',
    color: '#1e293b',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  icon: {
    marginBottom: '0.5rem',
    color: '#1e293b',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

export default Contact;
