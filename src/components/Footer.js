import React from 'react';
import footericon from "../pages/images/footer1.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="relative animated-gradient py-8">
      {/* Decorative Border at the top of the footer */}
      <div className="absolute inset-x-0 top-0 border-t-4 border-dotted border-yellow-400"></div>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-col md:flex-col items-center justify-center px-4 relative">
        
        {/* Centered Website Name */}
        <div className="footer-logo text-center mb-6 md:mb-4">
          <h2 className="text-3xl font-bold text-white">CHITRABINDOO</h2>
          <p className="text-sm mt-2 italic">Explore the world of art and creativity</p>
        </div>

        {/* Address just below "Chitrabindu" */}
        <div className="text-center mb-6 md:mb-4">
          <p className="text-sm">123 Art Lane, Creativity City, CA 94016</p>
          <p className="text-sm">Email: contact@chitrabindu.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Icons at Bottom Right */}
        <div className="flex items-center justify-center md:justify-center gap-6 mb-4 w-full md:w-auto">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="fab fa-linkedin fa-2x p-2 bg-white text-gray-900 rounded-lg" style={{ color: '#0077b5' }}></i>
          </a>
          <a
            href="https://www.instagram.com/your-insta-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="fab fa-instagram fa-2x p-2 bg-white text-gray-900 rounded-lg" style={{ color: '#E4405F' }}></i>
          </a>
          <a
            href="https://www.facebook.com/your-facebook-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="fab fa-facebook fa-2x p-2 bg-white text-gray-900 rounded-lg" style={{ color: '#1877F2' }}></i>
          </a>
          <a
            href="https://wa.me/1234567890?text=Hello%20I%20am%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="fab fa-whatsapp fa-2x p-2 bg-white text-gray-900 rounded-lg animate-spin-slow" style={{ color: '#25D366' }}></i>
          </a>
        </div>

        {/* Footer Icon on the Bottom Left */}
        <div className="absolute left-0 bottom-4 transform">
          <img 
            src={footericon} 
            alt="Footer Icon" 
            className="h-20 w-20 md:h-[120px] md:w-[200px] object-cover rounded-full border-4 border-white" // Circular image with border
          />
        </div>
      </div>

      {/* Bottom Line and Credits */}
      <div className="container mx-auto mt-4 text-center border-t border-gray-700 pt-4">
        <p>&copy; 2024 Chitrabindu. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        /* Unique Gradient Background */
        .animated-gradient {
          background: linear-gradient(45deg, #00c6ff, #0072ff, #8e2de2, #4a00e0);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }

        /* Gradient animation */
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
