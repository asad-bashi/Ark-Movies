/*
Company
-about us
-our services
-privacy policy

Get Help
-audio and subtitles
-payment options
-media center
-contact us

gift cards
terms of use
corporate information

Follow us
social media icons
*/

import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <ul className="List-Title">
        Company
        <li className="List-Item">About Us</li>
        <li className="List-Item">Our Services</li>
        <li className="List-Item">Privacy Policy</li>
      </ul>
      <ul className="List-Title">
        Get Help
        <li className="List-Item">Audio Subtitles</li>
        <li className="List-Item">Payment Options</li>
        <li className="List-Item">Media center</li>
        <li className="List-Item">Contact Us</li>
      </ul>
      <ul className="List-Title">
        Shop
        <li className="List-Item">Gift Cards</li>
        <li className="List-Item">Subscriptions</li>
      </ul>
      <ul>Follow Us</ul>
    </footer>
  );
}

export default Footer;
