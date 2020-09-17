import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    const footerYear = new Date().getFullYear();
    return (
      <footer>
        <section className="social">
          <h6>Copyrights &#169; Yusuf Alp {footerYear}</h6>
          <a href="https://www.linkedin.com/in/yusuf-alp/">Linkedin</a>
          <a href="https://github.com/yusufalp">Github</a>
          <a href="mailto:alpyusuf007@gmail.com">Email</a>
        </section>
      </footer>
    )
  }
}

export default Footer;