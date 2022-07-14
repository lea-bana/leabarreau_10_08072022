import logo from "../assets/whiteLogo.svg";
import copyrights from "../assets/copyrights.svg";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        <div className="logo">
          <img src={logo} alt="logo-kasa" className="logo-footer" />
        </div>
        <img src={copyrights} alt="copyright" className="copyright" />
      </div>
    </div>
  );
}
export default Footer;
