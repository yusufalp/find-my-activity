import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    const footerYear = new Date().getFullYear();
    return (
      <footer>
        <section className="social">
          <h6>Copyrights &#169; Yusuf Alp {footerYear}</h6>
          <p>Linkedin</p>
          <p>Github</p>
          <p>Twitter</p>
        </section>
      </footer>
    )
  }
}

export default Footer;