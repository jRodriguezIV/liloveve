import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footerWrapper">
        <div className="partition1">
          <div className="help">
            <h4>Help</h4>
            <p>Shipping</p>
            <p>Returns + Exchanges</p>
            <p>Warranthy</p>
            <p>Accessibility Statement</p>
            <p>All FAQ</p>
            <p>Contact Us</p>
          </div>

          <div className="resources">
            <h4>Resources</h4>
            <p>Jewelry Care</p>
            <p>Ring Sizer</p>
            <p>Piercing Aftercare</p>
            <p>Style Edit</p>
            <p>Supplier Code of Conduct</p>
          </div>

          <div className="stores_services">
            <h4>Stores & Services</h4>
            <p>Stores</p>
            <p>Piercing Studio</p>
            <p>Styling Appointments</p>
          </div>

          <div className="aboutUs">
            <h4>About Us</h4>
            <p>Mission</p>
            <p>Empowerment Fund</p>
            <p>Quality & Craftsmanship</p>
            <p>Sustainability</p>
            <p>Materials</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="partition2">
          <h4>Join The Fine Crew</h4>
          <p>Insider info on new arrivals, early access and everything fine.</p>
          <input type="text" placeholder="Your email" />
        </div>
      </div>

      <div className="footerBanner">
        <p className="shipping">Shipping To: <u>United States ($)</u></p>
        <p className="terms">Terms and Conditions</p>
        <p className="privacy">Privacy Policy</p>
        <p className="emojis">💎</p>
        <p className="copyright">© 2022 Liloveve </p>
      </div>
      
    </div>
  );
}
