import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <ul className="List">
        <li className="List-Title">Company</li>
        <li className="List-Item">About Us</li>
        <li className="List-Item">Our Services</li>
        <li className="List-Item">Privacy Policy</li>
      </ul>
      <ul className="List">
        <li className="List-Title">Get Help</li>
        <li className="List-Item">Audio Subtitles</li>
        <li className="List-Item">Payment Options</li>
        <li className="List-Item">Media center</li>
        <li className="List-Item">Contact Us</li>
      </ul>
      <ul className="List">
        <li className="List-Title">Shop</li>
        <li className="List-Item">Gift Cards</li>
        <li className="List-Item">Subscriptions</li>
      </ul>
      <ul className="List">
        <li className="List-Title">Follow Us</li>
        <div className="Socials">
          {/*make icons smaller */}
          <FacebookIcon
            className="Icon"
            sx={{ fontSize: "2.5rem", color: "#b71c1c" }}
          />
          <TwitterIcon
            className="Icon"
            sx={{ fontSize: "2.5rem", color: "#b71c1c" }}
          />
          <InstagramIcon
            className="Icon"
            sx={{ fontSize: "2.5rem", color: "#b71c1c" }}
          />
          <LinkedInIcon
            className="Icon"
            sx={{ fontSize: "2.5rem", color: "#b71c1c" }}
          />
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
