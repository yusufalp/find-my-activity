import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    const footerYear = new Date().getFullYear();
    return (
      <footer>
        <section>
          <h6>Copyrights &#169; Yusuf Alp {footerYear}</h6>
          <a className="social" href="https://www.linkedin.com/in/yusuf-alp/">Linkedin</a>
          <a className="social" href="https://github.com/yusufalp">Github</a>
          <a className="social" href="mailto:alpyusuf007@gmail.com">Email</a>
        </section>
        <div id="attribute">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    )
  }
}

export default Footer;