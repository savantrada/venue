import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
                    <p>
                        Thank you for visiting. If you have any suggestions or want to say "Hello", Send me your message at {" "}
                        <a href="mailto:savan@savantrada.com">savan@savantrada.com</a>.{" "}
                    </p>
                    The venue 2019.All rights reserved.
                    Built with &#10084; & by me.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;