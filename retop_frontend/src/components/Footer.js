import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-4 px-4 text-center">
        <p>&copy; 2024 Alrisky Lismanto. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="/" className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Replace with your Facebook icon SVG */}
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.64 9.03 8.36 9.75v-6.9H7.75v-2.86H10.36V9.64c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.72-1.53 1.46v1.76h2.61l-.41 2.86h-2.2v6.9C18.36 21.03 22 16.95 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Replace with your Twitter icon SVG */}
              <path d="M22.46 5.54c-.81.36-1.68.6-2.58.71.93-.56 1.64-1.45 1.97-2.51-.87.52-1.84.9-2.87 1.1-.83-.89-2.02-1.45-3.33-1.45-2.53 0-4.58 2.05-4.58 4.58 0 .36.04.71.09 1.05C7.64 9.5 4.14 7.34 1.69 4.09c-.38.65-.59 1.41-.59 2.22 0 1.58.81 2.97 2.04 3.78-.75-.02-1.45-.23-2.06-.57v.06c0 2.21 1.57 4.05 3.64 4.46-.38.09-.78.14-1.19.14-.29 0-.58-.03-.86-.08.58 1.81 2.26 3.13 4.25 3.17-1.56 1.22-3.54 1.95-5.69 1.95-.37 0-.74-.02-1.11-.07 2.02 1.3 4.42 2.06 7.01 2.06 8.41 0 13.02-6.98 13.02-13.02 0-.2 0-.41-.01-.61.89-.65 1.67-1.46 2.29-2.39z" />
            </svg>
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Replace with your YouTube icon SVG */}
              <path d="M23.71 7.52s-.22-1.59-1-2.25c-.94-.89-1.9-.89-2.35-.94C17.89 4 12 4 12 4s-5.89 0-8.36.33c-.45.05-1.41.05-2.35.94-.78.66-.97 2.25-.97 2.25S0 9.48 0 11.52v1.91c0 1.99.24 3.98.24 3.98s.22 1.59 1 2.25c.94.89 1.87.89 2.35.94 1.73.16 8.36.16 8.36.16s5.89 0 8.36-.33c.45-.05 1.41-.05 2.35-.94.78-.66.97-2.25.97-2.25s.24-2 .24-3.98v-1.91c0-2.04-.24-4.03-.24-4.03zm-15.71 5.43V9.52l5.99 3.22-5.99 3.21z" />
            </svg>
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Replace with your Pinterest icon SVG */}
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.64 9.03 8.36 9.75v-6.9H7.75v-2.86H10.36V9.64c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.72-1.53 1.46v1.76h2.61l-.41 2.86h-2.2v6.9C18.36 21.03 22 16.95 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
