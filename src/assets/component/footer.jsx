import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c2c2c' }} className="py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-3 mb-4 text-white">
            <img
              src="./src/assets/component/About/final logo.jpg" // Replace with your logo's URL
              alt="CODE TRACKER"
              className="mb-3"
              style={{ 
                width: '100px', // Adjust size as needed
                height: '100px', // Ensure height matches width for circularity
                borderRadius: '2px 50%' ,// Make the image circular
                 border: '2px solid white'
              }} 
            />
            <p>© 2023-2025 CODE TRACKER™</p>
          </div>

          {/* Product Section */}
          <div className="col-lg-2 mb-3 text-white">
            <h5 className="font-weight-bold">COMMUNITY</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-primary">Auto CODE-TRACKER</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Live CODE-TRACKER</a></li>
              <li><a href="#" className="text-decoration-none text-primary">CODE OG CONDUCT</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Exam Monitoring Software</a></li>
              <li><a href="#" className="text-decoration-none text-primary">MEET THE TEAM</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Contacts</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Acknowledgements</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-lg-2 mb-3 text-white">
            <h5 className="font-weight-bold">HELP</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-primary">Quick start</a></li>
              <li><a href="#" className="text-decoration-none text-primary">CODE-TRACKER APIs</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Documentation</a></li>
              <li><a href="#" className="text-decoration-none text-primary">For students</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Computer check</a></li>
            </ul>
          </div>

          {/* More Section */}
          <div className="col-lg-2 mb-3 text-white">
            <h5 className="font-weight-bold">MORE</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-primary">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-primary">CODE-TRACKER NATION</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Terms e</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Privacy policy</a></li>
              <li><a href="#" className="text-decoration-none text-primary">General data protection regulation</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="col-lg-2 mb-3 text-white">
            <h5 className="font-weight-bold">INFORMATION</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-primary">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-primary">About us</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Terms of service</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Accessibility statement</a></li>
              <li><a href="#" className="text-decoration-none text-primary">Privacy policy</a></li>
              <li><a href="#" className="text-decoration-none text-primary">General data protection regulation</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-2 mb-3 text-white">
            <h5 className="font-weight-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/react" target="_blank" rel="noopener" className="text-white hover-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.5em" height="2.5em" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/reactjs" target="_blank" rel="noopener" className="text-white hover-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="2.5em" width="2.5em" fill="currentColor">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"></path>
                </svg>
              </a>
              <a href="https://github.com/facebook/react" target="_blank" rel="noopener" className="text-white hover-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.5em" height="2.5em" fill="currentColor">
                  <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.83-2.33 4.68-4.55 4.94.35.3.66.91.66 1.84l-.01 2.73c0 .26.18.58.68.48A10 10 0 0 0 10 0"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
