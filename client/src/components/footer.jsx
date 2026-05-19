
const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}

                <div className="footer-section">

                    <h3>AWEB</h3>

                    <p>
                        A modern web application built with
                        React and Spring Boot.
                    </p>

                </div>

                {/* CONTACT */}

                <div className="footer-section">

                    <h4>Contact</h4>

                    <p>Email: support@aweb.com</p>

                    <p>Phone: +84 123 456 789</p>

                    <p>
                        Address: Ha Noi, Viet Nam
                    </p>

                </div>

                {/* SOCIAL */}

                <div className="footer-section">

                    <h4>Follow Us</h4>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://github.com"
                        target="_blank"
                    >
                        GitHub
                    </a>

                </div>

            </div>

            {/* BOTTOM */}

            <div className="footer-bottom">

                © 2026 AWEB. All rights reserved.

            </div>

        </footer>

    );
}

export default Footer;