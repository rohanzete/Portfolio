import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/rohanzete@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>
        
        <h3 className="section-subtitle">Find Me Online</h3>
        <div className="contact-methods">
          <a href="mailto:rohanzete@gmail.com" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>rohanzete@gmail.com</p>
          </a>
          
          <a href="https://linkedin.com/in/rohanzete/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Professional Network</p>
          </a>
          
          <a href="https://github.com/rohanzete" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Code Repositories</p>
          </a>
          
          <a href="https://leetcode.com/u/rohan_zete/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </div>
            <h3>LeetCode</h3>
            <p>Coding Practice</p>
          </a>
          
          <a href="https://www.geeksforgeeks.org/profile/rohanaeqfx" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.04 3.04 0 0 1-2.135-2.078 3.334 3.334 0 0 1-.026-.857h7.098a.692.692 0 0 0 .694-.694v-.004a7.104 7.104 0 0 0-2.039-5.072 6.958 6.958 0 0 0-2.702-1.813 6.926 6.926 0 0 0-3.232-.21 7.045 7.045 0 0 0-4.527 2.455 6.947 6.947 0 0 0-1.74 4.735c.002.923.13 1.84.382 2.726a7.036 7.036 0 0 0 2.956 3.978c.967.579 2.049.94 3.174 1.06.94.1 1.888.065 2.814-.103a6.98 6.98 0 0 0 2.654-1.075 6.947 6.947 0 0 0 1.845-1.817c.213-.32.397-.655.55-1.002a.692.692 0 0 0-.37-.877l-2.558-1.205a.688.688 0 0 0-.915.333zm-8.758-2.722c.08-.638.327-1.244.716-1.754a3.117 3.117 0 0 1 1.654-1.166 3.226 3.226 0 0 1 2.054.095c.664.223 1.24.632 1.657 1.177.418.544.655 1.19.683 1.859l.007.11H12.692z"/>
              </svg>
            </div>
            <h3>GeeksforGeeks</h3>
            <p>Problem Solving</p>
          </a>
        </div>

        <h3 className="section-subtitle">Connect With Me</h3>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="status-message success">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Failed to send message. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2026 Rohan Zete. Built with React & ❤️</p>
      </footer>
    </section>
  );
};

export default Contact;
